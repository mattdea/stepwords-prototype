import type { ReactNode } from "react";
import { ArrowRightIcon } from "../icons";

/**
 * Mini staircase glyph used as the Daily/Quick card icon (prototype `.hstair`).
 * Daily (blue) is 4 rows (3-4-5-6 cells); Quick (gold) is 3 rows (3-4-5). The
 * lower rows fade to the `.g` tint, exactly as in the prototype.
 */
export function StairGlyph({ gold = false }: { gold?: boolean }) {
  const rowCount = gold ? 3 : 4; // Quick = 3 rows, Daily = 4
  return (
    <div className={gold ? "hstair gold" : "hstair"}>
      {Array.from({ length: rowCount }, (_, ri) => (
        <div className="r" key={ri}>
          {Array.from({ length: 3 + ri }, (_, i) => (
            <div className={ri >= 2 ? "b g" : "b"} key={i} />
          ))}
        </div>
      ))}
    </div>
  );
}

/** Squat tile holding the plus glyph for the Create card (prototype `.create-tile`). */
export function CreateGlyph() {
  return (
    <div className="create-tile">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    </div>
  );
}

export interface HomeCardProps {
  /** Card title (e.g. "Daily Puzzle"). */
  title: string;
  /** Supporting line under the title. */
  description?: string;
  /** Left-hand icon — pass `<StairGlyph />` or `<CreateGlyph />`. */
  icon?: ReactNode;
  /** `lead` enlarges the title and padding for the primary (Daily) card. */
  lead?: boolean;
  /** Right-hand affordance: a Play button (pass a node) or the default arrow. */
  action?: ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * A home-screen menu card (prototype `.home-card`): equal-width icon column, a
 * title + description, and a trailing action. The `lead` variant is the
 * emphasized Daily card; the rest are quieter rows whose text columns
 * left-align with it.
 */
export function HomeCard({
  title,
  description,
  icon,
  lead = false,
  action,
  onClick,
  className,
}: HomeCardProps) {
  const classes = ["home-card", lead ? "lead" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={onClick}>
      {icon && <div className="hc-icon">{icon}</div>}
      <div className="hc-text">
        <h4>{title}</h4>
        {description && <div className="desc">{description}</div>}
      </div>
      {action ?? (
        <span className="arrow">
          <ArrowRightIcon />
        </span>
      )}
    </div>
  );
}
