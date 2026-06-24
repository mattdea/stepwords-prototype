import type { ReactNode } from "react";
import { ChevronRightIcon, PencilIcon } from "../icons";

/** Mini staircase glyph used as the Daily/Quick card icon. */
export function StairGlyph({ gold = false }: { gold?: boolean }) {
  return (
    <div className={["sw-hstair", gold ? "sw-hstair--gold" : ""].join(" ")}>
      {[1, 2, 3, 4].map((n) => (
        <div className="r" key={n}>
          {Array.from({ length: n }, (_, i) => (
            <div
              className={["b", i === n - 1 ? "g" : ""].join(" ")}
              key={i}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/** Squat tile holding the pencil glyph for the Create card. */
export function CreateGlyph() {
  return (
    <div className="sw-create-tile">
      <PencilIcon />
    </div>
  );
}

export interface HomeCardProps {
  /** Card title (e.g. "Daily Stepword"). */
  title: string;
  /** Supporting line under the title. */
  description?: string;
  /** Left-hand icon — pass `<StairGlyph />` or `<CreateGlyph />`. */
  icon?: ReactNode;
  /** `lead` enlarges the title and padding for the primary (Daily) card. */
  lead?: boolean;
  /** Right-hand affordance: a Play button (pass a node) or the default chevron. */
  action?: ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * A home-screen menu card: equal-width icon column, a title + description, and
 * a trailing action. The `lead` variant is the emphasized Daily card; the rest
 * are quieter rows whose text columns left-align with it.
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
  const classes = ["sw-card", lead ? "sw-card--lead" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={classes} onClick={onClick}>
      {icon && <span className="sw-card__icon">{icon}</span>}
      <span className="sw-card__text">
        <h4>{title}</h4>
        {description && <div className="sw-card__desc">{description}</div>}
      </span>
      {action ?? (
        <span className="sw-card__arrow">
          <ChevronRightIcon />
        </span>
      )}
    </button>
  );
}
