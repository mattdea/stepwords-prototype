import type { ReactNode } from "react";

export interface ModalProps {
  /** Heading shown at the top of the card (serif). */
  title?: string;
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
 * A centered paper modal over a dimmed, blurred backdrop (prototype
 * `.modal-overlay` > `.modal`) — the shell for the how-to-play and
 * info/credits dialogs. Renders inline (no portal) so it sits within the app
 * frame; place it inside a positioned parent.
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
        {info && title ? (
          <span className="info-wordmark">{title}</span>
        ) : (
          title && <h3>{title}</h3>
        )}
        {children && (info ? <p className="info-credits">{children}</p> : <p>{children}</p>)}
        {footer}
      </div>
    </div>
  );
}
