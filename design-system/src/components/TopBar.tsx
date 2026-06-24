import type { ReactNode } from "react";
import { Button } from "./Button";
import { ChevronLeftIcon, InfoIcon, EllipsisIcon } from "../icons";

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
 * The game header: a centered serif title (with optional date) flanked by
 * paper icon buttons. The title is absolutely centered so it never shifts when
 * the side actions change width.
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
    <div className={["sw-topbar", className].filter(Boolean).join(" ")}>
      <div className="sw-topbar__actions">
        {onBack && (
          <Button
            variant="icon"
            aria-label="Back"
            icon={<ChevronLeftIcon />}
            onClick={onBack}
          />
        )}
      </div>
      <div className="sw-topbar__title-wrap">
        <span className="sw-topbar__title">{title}</span>
        {subtitle && <span className="sw-topbar__date">{subtitle}</span>}
      </div>
      <div className="sw-topbar__actions">
        {actions}
        {onInfo && (
          <Button
            variant="icon"
            aria-label="Info"
            icon={<InfoIcon />}
            onClick={onInfo}
          />
        )}
        {onMenu && (
          <Button
            variant="icon"
            aria-label="More"
            icon={<EllipsisIcon />}
            onClick={onMenu}
          />
        )}
      </div>
    </div>
  );
}
