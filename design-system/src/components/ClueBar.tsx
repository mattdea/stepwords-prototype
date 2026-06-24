import { Button } from "./Button";
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
 * The clue bar docked above the keyboard. Arrows step between rows; the serif
 * clue sits centered with its answer length called out in muted ink.
 */
export function ClueBar({ clue, length, onPrev, onNext, className }: ClueBarProps) {
  return (
    <div className={["sw-clue-bar", className].filter(Boolean).join(" ")}>
      <Button
        variant="icon"
        aria-label="Previous clue"
        icon={<ChevronLeftIcon />}
        onClick={onPrev}
      />
      <span className="sw-clue-bar__text">
        {clue}
        {length != null && <span className="sw-clue-bar__len"> ({length})</span>}
      </span>
      <Button
        variant="icon"
        aria-label="Next clue"
        icon={<ChevronRightIcon />}
        onClick={onNext}
      />
    </div>
  );
}
