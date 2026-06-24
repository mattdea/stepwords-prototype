import type { ReactNode } from "react";

const ROWS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

export interface KeyProps {
  label: ReactNode;
  /** Highlights the key as an available letter (full ink). */
  available?: boolean;
  /** Wider key footprint, for Enter / Delete. */
  wide?: boolean;
  /** Accent-filled submit key. */
  submit?: boolean;
  onClick?: () => void;
}

/** A single keyboard key (prototype `.key`). */
export function Key({ label, available, wide, submit, onClick }: KeyProps) {
  const classes = [
    "key",
    available ? "avail" : "",
    wide ? "wide" : "",
    submit ? "submit" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button type="button" className={classes} onClick={onClick}>
      {label}
    </button>
  );
}

export interface KeyboardProps {
  /** Letters drawn at full ink; the rest render dimmed. When omitted, all
   *  letters are available. */
  available?: string[];
  /** Show the Enter / Delete action row. */
  showActions?: boolean;
  onKeyPress?: (key: string) => void;
  onEnter?: () => void;
  onDelete?: () => void;
  className?: string;
}

/**
 * The on-screen QWERTY keyboard (prototype `.keyboard`). Available letters read
 * at full ink; the rest dim back, which in play signals which letters are still
 * in the pool. The accent Enter key submits.
 */
export function Keyboard({
  available,
  showActions = true,
  onKeyPress,
  onEnter,
  onDelete,
  className,
}: KeyboardProps) {
  const avail = available
    ? new Set(available.map((c) => c.toUpperCase()))
    : null;
  return (
    <div className={["keyboard", className].filter(Boolean).join(" ")}>
      {ROWS.map((row, ri) => (
        <div className="kb-row" key={ri}>
          {ri === ROWS.length - 1 && showActions && (
            <Key label="Submit" wide submit onClick={onEnter} />
          )}
          {row.split("").map((c) => (
            <Key
              key={c}
              label={c}
              available={avail ? avail.has(c) : true}
              onClick={() => onKeyPress?.(c)}
            />
          ))}
          {ri === ROWS.length - 1 && showActions && (
            <Key label="⌫" wide onClick={onDelete} />
          )}
        </div>
      ))}
    </div>
  );
}
