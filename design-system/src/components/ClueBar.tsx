import { ChevronLeftIcon, ChevronRightIcon } from "../icons";

export interface ClueBarProps {
  /** The clue for the selected row. */
  clue: string;
  /** Letter count of the answer, shown as a muted "(N)". */
  length?: number;
  onPrev?: () => void;
  onNext?: () => void;
  className?: string;
}

/**
 * The clue bar docked above the keyboard (prototype `.clue-bar`). Arrows step
 * between rows; the serif clue sits centered with its answer length called out
 * in muted ink.
 */
export function ClueBar({
  clue,
  length,
  onPrev,
  onNext,
  className,
}: ClueBarProps) {
  return (
    <div className={["clue-bar", className].filter(Boolean).join(" ")}>
      <button type="button" className="arrow" aria-label="Previous clue" onClick={onPrev}>
        <ChevronLeftIcon width={14} height={14} />
      </button>
      <span className="clue-text">
        {clue}
        {length != null && <span className="len"> ({length})</span>}
      </span>
      <button type="button" className="arrow" aria-label="Next clue" onClick={onNext}>
        <ChevronRightIcon width={14} height={14} />
      </button>
    </div>
  );
}
