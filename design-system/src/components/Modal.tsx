import type { ReactNode } from "react";

export interface ModalProps {
  /** Heading shown at the top of the card. Rendered as the serif `h3`
   *  (panel modal) or the `info-wordmark` when `info`. Omit to supply your own
   *  heading inside `children`. */
  title?: string;
  /** Modal body — composed freely (panels, illustrations, dots, nav). */
  children?: ReactNode;
  /** Footer actions (e.g. a primary Button), rendered below the body. */
  footer?: ReactNode;
  /** Renders the info/credits variant (`.info-card`) instead of the panel modal. */
  info?: boolean;
  /** Dismiss handler, fired on overlay click. */
  onClose?: () => void;
  className?: string;
}

/**
 * The paper modal shell over a dimmed, blurred backdrop (prototype
 * `.modal-overlay` > `.modal`). It is a layout shell only — compose the body
 * (how-to panels with illustrations + dots + nav, or the info/credits card)
 * as `children`. Place it inside a positioned parent.
 */
export function Modal({
  title,
  children,
  footer,
  info = false,
  onClose,
  className,
}: ModalProps) {
  const modalClass = ["modal", info ? "info-card" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className={modalClass} role="dialog" aria-modal="true" aria-label={title}>
        {title &&
          (info ? (
            <span className="info-wordmark">{title}</span>
          ) : (
            <h3>{title}</h3>
          ))}
        {children}
        {footer}
      </div>
    </div>
  );
}
