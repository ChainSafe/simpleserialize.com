type CustomTypeEditorProps = {
  dsl: string;
  onDslChange: (dsl: string) => void;
  error: string | null;
  parsedNames: string[];
};

const PLACEHOLDER = `class MyContainer(Container):
    slot: uint64
    parent_root: Bytes32
    attestations: List[Attestation, 128]`;

export function CustomTypeEditor({dsl, onDslChange, error, parsedNames}: CustomTypeEditorProps) {
  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-surface-raised)]/40 px-5 py-3">
      <div className="max-w-[1800px] mx-auto flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium text-[var(--color-text-muted)] uppercase tracking-widest">
            Custom Container Definition
          </span>
          <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
            {error ? "parse error" : parsedNames.length > 0 ? `parsed: ${parsedNames.join(", ")}` : "empty"}
          </span>
        </div>
        <textarea
          className="w-full min-h-[140px] bg-[var(--color-surface)] text-[var(--color-text-primary)] font-mono text-[12px] leading-relaxed rounded-lg border border-[var(--color-border)] p-3 resize-y focus:border-[var(--color-border-focus)] focus:outline-none placeholder:text-[var(--color-text-muted)]/50 transition-colors"
          value={dsl}
          onChange={(e) => onDslChange(e.target.value)}
          placeholder={PLACEHOLDER}
          spellCheck={false}
        />
        {error && (
          <div className="text-[11px] font-mono text-red-400 bg-red-500/10 border border-red-500/30 rounded px-2 py-1">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
