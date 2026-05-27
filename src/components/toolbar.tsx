import {type ForkName, forkNames} from "../lib/types";

type ToolbarProps = {
  forkName: string;
  typeName: string;
  typeOptions: string[];
  serializeMode: boolean;
  onForkChange: (fork: ForkName) => void;
  onTypeChange: (type: string) => void;
  onModeChange: (serialize: boolean) => void;
};

export function Toolbar({
  forkName,
  typeName,
  typeOptions,
  serializeMode,
  onForkChange,
  onTypeChange,
  onModeChange,
}: ToolbarProps) {
  const types = typeOptions;

  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-surface-raised)]/40 px-5 py-2.5">
      <div className="flex items-center gap-6 max-w-[1800px] mx-auto flex-wrap">
        {/* Mode toggle */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest font-medium mr-1">
            Mode
          </span>
          <div className="flex gap-0.5 bg-[var(--color-surface)]/60 rounded-md p-0.5 border border-[var(--color-border)]">
            <button
              onClick={() => onModeChange(true)}
              className={`px-3 py-1 text-[11px] font-mono rounded-[3px] transition-all duration-150 ${
                serializeMode
                  ? "bg-[var(--color-eth-blue)]/15 text-[var(--color-eth-blue)] shadow-[inset_0_0_0_1px_var(--color-eth-blue-dim)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
              }`}
            >
              Serialize
            </button>
            <button
              onClick={() => onModeChange(false)}
              className={`px-3 py-1 text-[11px] font-mono rounded-[3px] transition-all duration-150 ${
                !serializeMode
                  ? "bg-[var(--color-eth-blue)]/15 text-[var(--color-eth-blue)] shadow-[inset_0_0_0_1px_var(--color-eth-blue-dim)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
              }`}
            >
              Deserialize
            </button>
          </div>
        </div>

        <div className="w-px h-5 bg-[var(--color-border)]" />

        {/* Fork */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest font-medium">Fork</span>
          <select
            value={forkName}
            onChange={(e) => onForkChange(e.target.value as ForkName)}
            className="bg-[var(--color-surface-overlay)] text-[var(--color-text-primary)] text-[12px] font-mono rounded-md px-2.5 py-1 border border-[var(--color-border)] focus:border-[var(--color-border-focus)] focus:outline-none cursor-pointer"
          >
            {forkNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Type */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest font-medium">Type</span>
          <select
            value={typeName}
            onChange={(e) => onTypeChange(e.target.value)}
            disabled={types.length === 0}
            className="bg-[var(--color-surface-overlay)] text-[var(--color-text-primary)] text-[12px] font-mono rounded-md px-2.5 py-1 border border-[var(--color-border)] focus:border-[var(--color-border-focus)] focus:outline-none cursor-pointer max-w-[280px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {types.length === 0 ? (
              <option value="">—</option>
            ) : (
              types.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))
            )}
          </select>
        </div>
      </div>
    </div>
  );
}
