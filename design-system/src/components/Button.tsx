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

/**
 * The one button in the system. Three variants cover every action surface:
 * the accent pill (Play / Submit / Share), the paper icon square (back,
 * overflow, hint), and the quiet text link (footer, back-to-home).
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
  const classes = [
    "sw-btn",
    `sw-btn--${variant}`,
    compact && variant === "primary" ? "sw-btn--compact" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...rest}>
      {icon}
      {children}
    </button>
  );
}
