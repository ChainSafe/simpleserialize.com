import type {Type} from "@chainsafe/ssz";
import {useCallback, useEffect, useMemo, useState} from "react";
import {CustomTypeEditor} from "./components/custom-type-editor";
import {Footer} from "./components/footer";
import {Header} from "./components/header";
import {InputPanel} from "./components/input-panel";
import {OutputPanel} from "./components/output-panel";
import {StructureView} from "./components/structure-view/structure-view";
import {Toolbar} from "./components/toolbar";
import {useDebounce} from "./hooks/use-debounce";
import {useSsz} from "./hooks/use-ssz";
import {useWorker} from "./hooks/use-worker";
import {type CompileResult, compileCustomDsl} from "./lib/custom-type";
import {inputFormats, serializeOutputFormats} from "./lib/formats";
import {CUSTOM_FORK, type ForkName, forks, typeNames} from "./lib/types";

const DEFAULT_FORK = "fulu";
const DEFAULT_TYPE = "BeaconBlock";

export default function App() {
  // Core state
  const [forkName, setForkName] = useState<string>(DEFAULT_FORK);
  const [typeName, setTypeName] = useState<string>(DEFAULT_TYPE);
  const [serializeMode, setSerializeMode] = useState(true);
  const [input, setInput] = useState("");
  const [inputFormat, setInputFormat] = useState("yaml");
  const [outputFormat, setOutputFormat] = useState("hex");
  const [parsedValue, setParsedValue] = useState<unknown>(null);
  const [inputMode, setInputMode] = useState<"editor" | "builder">("builder");

  // Custom-type DSL state
  const [customDsl, setCustomDsl] = useState("");
  const [customCompile, setCustomCompile] = useState<CompileResult | null>(null);
  const debouncedDsl = useDebounce(customDsl, 300);

  // Worker
  const worker = useWorker();

  // SSZ processing
  const result = useSsz(worker, serializeMode ? "serialize" : "deserialize", forkName, typeName, input, inputFormat);

  // Get current SSZ type
  const sszType: Type<unknown> | null = useMemo(() => {
    if (forkName === CUSTOM_FORK) {
      return customCompile?.ok ? (customCompile.types.get(typeName) ?? null) : null;
    }
    return forks[forkName]?.[typeName] ?? null;
  }, [forkName, typeName, customCompile]);

  // TYPE dropdown options
  const typeOptions = useMemo(() => {
    if (forkName === CUSTOM_FORK) {
      return customCompile?.ok ? customCompile.order : [];
    }
    return typeNames(forks[forkName] ?? {});
  }, [forkName, customCompile]);

  // Compile custom DSL (main thread for UI, worker for serialize/deserialize)
  useEffect(() => {
    if (forkName !== CUSTOM_FORK) return;
    if (!debouncedDsl.trim()) {
      setCustomCompile(null);
      return;
    }
    const local = compileCustomDsl(debouncedDsl);
    setCustomCompile(local);
    if (worker) worker.compileCustom(debouncedDsl);
  }, [debouncedDsl, forkName, worker]);

  // Keep typeName valid after custom compile changes
  useEffect(() => {
    if (forkName !== CUSTOM_FORK) return;
    if (!customCompile?.ok) return;
    if (!customCompile.types.has(typeName)) {
      setTypeName(customCompile.order.at(-1) ?? "");
    }
  }, [forkName, customCompile, typeName]);

  // Generate default value — callable from button and auto-trigger
  const generateDefault = useCallback(async () => {
    if (!worker || !sszType) return;
    try {
      const {value} = await worker.defaultValue(typeName, forkName);
      const format = serializeMode ? inputFormat : "hex";
      const dumped = inputFormats[format].dump(value, sszType);
      setInput(dumped);
      setParsedValue(value);
    } catch {
      // Silently fail — worker may not be ready yet
    }
  }, [worker, typeName, forkName, sszType, serializeMode, inputFormat]);

  // Auto-generate default ONLY on initial load and type/fork changes
  // NOT on mode/format changes (those carry data across intentionally)
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally omit serializeMode/inputFormat/sszType to avoid re-triggering on mode switches
  useEffect(() => {
    if (!worker || !sszType) return;
    (async () => {
      try {
        const {value} = await worker.defaultValue(typeName, forkName);
        const dumped = inputFormats[serializeMode ? inputFormat : "hex"].dump(value, sszType);
        setInput(dumped);
        setParsedValue(value);
      } catch {
        // Silently fail
      }
    })();
  }, [worker, typeName, forkName]);

  // When mode changes, carry data across for round-trip
  const handleModeChange = useCallback(
    (serialize: boolean) => {
      if (!serialize && result.serialized) {
        // Serialize → Deserialize: carry serialized bytes as hex into input
        const hex = serializeOutputFormats.hex.dump(result.serialized);
        setSerializeMode(false);
        setInputFormat("hex");
        setOutputFormat("yaml");
        setInput(hex);
      } else if (serialize && result.deserialized != null && sszType) {
        // Deserialize → Serialize: carry deserialized value into input
        setSerializeMode(true);
        setInputFormat("yaml");
        setOutputFormat("hex");
        try {
          const dumped = inputFormats.yaml.dump(result.deserialized, sszType);
          setInput(dumped);
          setParsedValue(result.deserialized);
        } catch {
          setInput("");
          setParsedValue(null);
        }
      } else {
        // No data to carry — just switch and clear
        setSerializeMode(serialize);
        setInput("");
        setParsedValue(null);
        if (serialize) {
          setInputFormat("yaml");
          setOutputFormat("hex");
        } else {
          setInputFormat("hex");
          setOutputFormat("yaml");
        }
      }
    },
    [result.serialized, result.deserialized, sszType]
  );

  // Handle fork change — reset type if not available
  const handleForkChange = useCallback(
    (newFork: ForkName) => {
      setForkName(newFork);
      if (newFork === CUSTOM_FORK) {
        const order = customCompile?.ok ? customCompile.order : [];
        if (!order.includes(typeName)) {
          setTypeName(order.at(-1) ?? "");
        }
        return;
      }
      const types = typeNames(forks[newFork]);
      if (!types.includes(typeName)) {
        setTypeName(DEFAULT_TYPE);
      }
    },
    [typeName, customCompile]
  );

  // Handle builder value change — sync to text input
  const handleBuilderValueChange = useCallback(
    (value: unknown) => {
      setParsedValue(value);
      if (sszType) {
        try {
          const dumped = inputFormats[inputFormat].dump(value, sszType);
          setInput(dumped);
        } catch {
          // Keep going even if dump fails
        }
      }
    },
    [sszType, inputFormat]
  );

  // Handle input mode change — sync data between modes
  const handleInputModeChange = useCallback(
    (mode: "editor" | "builder") => {
      if (mode === "builder" && parsedValue == null && sszType && input) {
        try {
          const parsed = inputFormats[inputFormat].parse(input, sszType);
          setParsedValue(parsed);
        } catch {
          // If parse fails, builder will show defaults
        }
      }
      setInputMode(mode);
    },
    [parsedValue, sszType, input, inputFormat]
  );

  // Handle input format change — re-dump current value in new format
  const handleInputFormatChange = useCallback(
    (format: string) => {
      if (parsedValue != null && sszType) {
        try {
          const dumped = inputFormats[format].dump(parsedValue, sszType);
          setInput(dumped);
        } catch {
          // Keep current input if conversion fails
        }
      }
      setInputFormat(format);
    },
    [parsedValue, sszType]
  );

  // Track parsed value for format conversion and structure view
  useEffect(() => {
    if (serializeMode && input && sszType) {
      try {
        const parsed = inputFormats[inputFormat].parse(input, sszType);
        setParsedValue(parsed);
      } catch {
        // Don't update parsed value on invalid input
      }
    } else if (!serializeMode && result.deserialized != null) {
      setParsedValue(result.deserialized);
    }
  }, [serializeMode, input, inputFormat, sszType, result.deserialized]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-surface)]">
      <Header />
      <Toolbar
        forkName={forkName}
        typeName={typeName}
        typeOptions={typeOptions}
        serializeMode={serializeMode}
        onForkChange={handleForkChange}
        onTypeChange={setTypeName}
        onModeChange={handleModeChange}
      />

      {forkName === CUSTOM_FORK && (
        <CustomTypeEditor
          dsl={customDsl}
          onDslChange={setCustomDsl}
          error={customCompile && !customCompile.ok ? customCompile.error : null}
          parsedNames={customCompile?.ok ? customCompile.order : []}
        />
      )}

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2.5 p-2.5 max-w-[1800px] mx-auto w-full">
        {/* Left: Input */}
        <div className="bg-[var(--color-surface-raised)] rounded-xl border border-[var(--color-border)] p-4 min-h-0">
          <InputPanel
            serializeMode={serializeMode}
            input={input}
            inputFormat={inputFormat}
            onInputChange={setInput}
            onInputFormatChange={handleInputFormatChange}
            onGenerateDefault={generateDefault}
            loading={result.loading}
            inputMode={inputMode}
            onInputModeChange={handleInputModeChange}
            sszType={sszType}
            typeName={typeName}
            parsedValue={parsedValue}
            onParsedValueChange={handleBuilderValueChange}
          />
        </div>

        {/* Right: Output + Structure stacked */}
        <div className="flex flex-col gap-2.5 min-h-0">
          <div className="bg-[var(--color-surface-raised)] rounded-xl border border-[var(--color-border)] p-4">
            <OutputPanel
              serializeMode={serializeMode}
              serialized={result.serialized}
              hashTreeRoot={result.hashTreeRoot}
              deserialized={result.deserialized}
              sszType={sszType}
              typeName={typeName}
              error={result.error}
              loading={result.loading}
              outputFormat={outputFormat}
              onOutputFormatChange={setOutputFormat}
            />
          </div>
          <div className="bg-[var(--color-surface-raised)] rounded-xl border border-[var(--color-border)] p-4 flex-1 min-h-[200px] overflow-auto">
            <span className="text-[10px] font-medium text-[var(--color-text-muted)] uppercase tracking-widest">
              Structure
            </span>
            <div className="mt-2">
              <StructureView sszType={sszType} data={parsedValue} typeName={typeName} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
