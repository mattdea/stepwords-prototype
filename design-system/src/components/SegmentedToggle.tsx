export interface SegmentedToggleProps {
  /** Segment labels. */
  options: string[];
  /** Currently selected label. */
  value: string;
  onChange?: (value: string) => void;
  className?: string;
}

/**
 * The pill segmented control (Main / Quick) above the archive calendar. The
 * active segment lifts onto paper; the rest stay quiet.
 */
export function SegmentedToggle({
  options,
  value,
  onChange,
  className,
}: SegmentedToggleProps) {
  return (
    <div className={["sw-seg", className].filter(Boolean).join(" ")} role="tablist">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          role="tab"
          aria-selected={opt === value}
          className={[
            "sw-seg__btn",
            opt === value ? "sw-seg__btn--active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={() => onChange?.(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
