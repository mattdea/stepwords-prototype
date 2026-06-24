import type { ReactNode } from "react";
import { ArrowRightIcon, InfoIcon, EllipsisIcon } from "../icons";

export interface TopBarProps {
  /** Centered title (e.g. "Stepwords"). Stays centered regardless of the
   *  side-button widths. */
  title: string;
  /** Optional second line under the title (the puzzle date). */
  subtitle?: string;
  /** Show the leading back button. */
  onBack?: () => void;
  /** Show the trailing info button. */
  onInfo?: () => void;
  /** Show the trailing overflow (⋯) button. */
  onMenu?: () => void;
  /** Extra trailing actions, rendered before info/menu. */
  actions?: ReactNode;
  className?: string;
}

/**
 * The game header (prototype `.game-top`): a centered serif title (with
 * optional date) flanked by paper icon buttons. The title is absolutely
 * centered so it never shifts when the side actions change width.
 */
export function TopBar({
  title,
  subtitle,
  onBack,
  onInfo,
  onMenu,
  actions,
  className,
}: TopBarProps) {
  return (
    <div className={["game-top", className].filter(Boolean).join(" ")}>
      <div className="top-actions">
        {onBack && (
          <button type="button" className="icon-square" aria-label="Back" onClick={onBack}>
            {/* the prototype mirrors the right-arrow glyph for "back" */}
            <ArrowRightIcon width={14} height={14} style={{ transform: "scaleX(-1)" }} />
          </button>
        )}
      </div>
      <div className="title-wrap">
        <span className="title">{title}</span>
        {subtitle && <span className="game-date">{subtitle}</span>}
      </div>
      <div className="top-actions">
        {actions}
        {onInfo && (
          <button type="button" className="icon-square" aria-label="Info" onClick={onInfo}>
            <InfoIcon width={6} height={16} />
          </button>
        )}
        {onMenu && (
          <button type="button" className="icon-square menu-dots" aria-label="More" onClick={onMenu}>
            <EllipsisIcon width={16} height={16} />
          </button>
        )}
      </div>
    </div>
  );
}
