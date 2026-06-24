import { StairsIcon } from "../icons";

export type CellState =
  | "empty" // not yet solved; shows the faint paper fill
  | "active" // the focused row being typed into
  | "cursor" // the single focused cell
  | "green" // solved on the first attempt
  | "yellow" // solved on a later attempt
  | "assist"; // revealed by a hint

export interface CellProps {
  /** The letter to show, if any. */
  letter?: string;
  state?: CellState;
  /** Marks the new-letter cell with the stairs glyph. */
  marker?: boolean;
  onClick?: () => void;
}

// Maps a cell state onto the prototype's exact class list (`cell solved green`,
// `cell active cursor`, `cell empty`, …).
function cellClass(state: CellState): string {
  switch (state) {
    case "green":
      return "cell solved green";
    case "yellow":
      return "cell solved yellow";
    case "assist":
      return "cell solved assist";
    case "cursor":
      return "cell active cursor";
    case "active":
      return "cell active";
    default:
      return "cell empty";
  }
}

/** A single board square. */
export function Cell({ letter, state = "empty", marker, onClick }: CellProps) {
  return (
    <div className={cellClass(state)} onClick={onClick}>
      {letter}
      {marker && <StairsIcon className="stairs" />}
    </div>
  );
}

export interface BoardRow {
  /** Per-cell letters; use empty strings for blanks. */
  letters: string[];
  /** Per-cell states, aligned to `letters`. */
  states?: CellState[];
  /** Index of the new-letter cell to mark with the stairs glyph. */
  markerIndex?: number;
  /** Whether this row's number is selected (accent pill). */
  selected?: boolean;
}

export interface StaircaseBoardProps {
  /** Rows from shortest to longest — each one letter longer than the last. */
  rows: BoardRow[];
  /** Show the left-hand row numbers. */
  showNumbers?: boolean;
  /** Longest row length; cells shrink to fit it on narrow viewports. */
  maxLen?: number;
  onCellClick?: (rowIndex: number, cellIndex: number) => void;
  className?: string;
}

/**
 * The staircase game board: each row is an anagram of the row above plus one
 * new letter, so the grid steps outward. Cells auto-size to the longest row
 * via a container query — no JS measurement.
 */
export function StaircaseBoard({
  rows,
  showNumbers = true,
  maxLen,
  onCellClick,
  className,
}: StaircaseBoardProps) {
  const longest =
    maxLen ?? rows.reduce((m, r) => Math.max(m, r.letters.length), 0);
  return (
    <div
      className={["board", className].filter(Boolean).join(" ")}
      style={{ ["--maxlen" as string]: String(longest) }}
    >
      {rows.map((row, ri) => (
        <div className="row" key={ri}>
          {showNumbers && (
            <span className={row.selected ? "num sel" : "num"}>{ri + 1}</span>
          )}
          {row.letters.map((letter, ci) => (
            <Cell
              key={ci}
              letter={letter}
              state={row.states?.[ci] ?? "empty"}
              marker={row.markerIndex === ci}
              onClick={() => onCellClick?.(ri, ci)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
