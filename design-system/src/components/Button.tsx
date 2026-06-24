import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "icon" | "text";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` is the accent-filled pill, `icon` the paper
   *  square for chrome actions, `text` a quiet link. */
  variant?: ButtonVariant;
  /** Tightens the primary pill for dense placements (e.g. the home cards). */
  compact?: boolean;
  /** Optional leading glyph, rendered before the label. */
  icon?: ReactNode;
  children?: ReactNode;
}

// Maps the component's variants onto the prototype's original class names so
// the rendered markup is identical to app.html.
function classFor(variant: ButtonVariant, compact: boolean): string {
  if (variant === "icon") return "icon-square";
  if (variant === "text") return "home-link";
  return compact ? "home-play" : "play-btn";
}

/**
 * The one button in the system. Three variants cover every action surface:
 * the accent pill (Play / Submit / Share — `play-btn`, or the tighter
 * `home-play` with `compact`), the paper icon square (`icon-square`), and the
 * quiet text link (`home-link`).
 */
export function Button({
  variant = "primary",
  compact = false,
  icon,
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = [classFor(variant, compact), className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...rest}>
      {icon}
      {children}
    </button>
  );
}
