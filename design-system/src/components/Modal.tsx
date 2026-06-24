import type { ReactNode } from "react";

export interface ModalProps {
  /** Heading shown at the top of the card (serif). */
  title?: string;
  children?: ReactNode;
  /** Footer actions (e.g. a primary Button), rendered below the body. */
  footer?: ReactNode;
  /** Dismiss handler, fired on overlay click. */
  onClose?: () => void;
  className?: string;
}

/**
 * A centered paper modal over a dimmed, blurred backdrop — the shell for the
 * how-to-play and info/credits dialogs. Renders inline (no portal) so it sits
 * within the app frame.
 */
export function Modal({ title, children, footer, onClose, className }: ModalProps) {
  return (
    <div
      className="sw-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        className={["sw-modal", className].filter(Boolean).join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {title && <h3>{title}</h3>}
        {children && <p>{children}</p>}
        {footer}
      </div>
    </div>
  );
}
