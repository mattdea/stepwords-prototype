import type { ReactNode } from "react";

const ROWS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

/** Font Awesome backspace glyph, filled with the key's current color. */
export function BackspaceIcon() {
  return (
    <svg viewBox="0 0 640 512" aria-hidden="true">
      <path d="M205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L205.3 64zM528 128l0 256c0 8.8-7.2 16-16 16l-306.7 0c-4.2 0-8.3-1.7-11.3-4.7L54.6 256 193.9 116.7c3-3 7.1-4.7 11.3-4.7L512 112c8.8 0 16 7.2 16 16zM284.1 188.1c-9.4 9.4-9.4 24.6 0 33.9l33.9 33.9-33.9 33.9c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l33.9-33.9 33.9 33.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-33.9-33.9 33.9-33.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-33.9 33.9-33.9-33.9c-9.4-9.4-24.6-9.4-33.9 0z" />
    </svg>
  );
}

export interface KeyProps {
  label: ReactNode;
  /** Highlights the key as an available letter (full ink). */
  available?: boolean;
  /** Wider key footprint, for Enter / Delete. */
  wide?: boolean;
  /** Accent-filled submit key. */
  submit?: boolean;
  /** Backspace/delete key — renders the backspace icon. */
  back?: boolean;
  onClick?: () => void;
}

/** A single keyboard key (prototype `.key`). */
export function Key({ label, available, wide, submit, back, onClick }: KeyProps) {
  const classes = [
    "key",
    available ? "avail" : "",
    wide ? "wide" : "",
    submit ? "submit" : "",
    back ? "back" : "",
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
            <Key label={<BackspaceIcon />} wide back onClick={onDelete} />
          )}
        </div>
      ))}
    </div>
  );
}
