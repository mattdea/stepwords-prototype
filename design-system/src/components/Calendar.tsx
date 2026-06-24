import { StarIcon, XmarkIcon } from "../icons";

export type DayStatus =
  | "none" // a past day not played
  | "completed" // solved (with a star rating)
  | "progress" // started, unfinished
  | "failed" // attempted and failed
  | "future"; // not yet available

export interface CalendarDay {
  /** Day of month; omit for leading blanks. */
  day?: number;
  status?: DayStatus;
  /** Star rating (0–3) for completed days. */
  stars?: number;
  /** Highlight as today (accent ring). */
  today?: boolean;
}

export interface CalendarProps {
  /** Cells in grid order, including leading blanks to align the first weekday. */
  days: CalendarDay[];
  /** Weekday header labels. */
  weekdays?: string[];
  onSelectDay?: (day: number) => void;
  className?: string;
}

const DEFAULT_WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

/** A day cell's status indicator (stars / dot / x). */
function DayMark({ day }: { day: CalendarDay }) {
  if (day.status === "completed") {
    return (
      <span className="sw-day__pips">
        {Array.from({ length: day.stars ?? 0 }, (_, i) => (
          <StarIcon key={i} />
        ))}
      </span>
    );
  }
  if (day.status === "progress") return <span className="sw-day__dot" />;
  if (day.status === "failed")
    return (
      <span className="sw-day__x">
        <XmarkIcon />
      </span>
    );
  return <span className="sw-day__pips" />;
}

/**
 * The archive month calendar. Each day cell carries one of four play states —
 * completed (gold stars), in-progress (dot), failed (x), or untouched — and
 * today gets an accent ring.
 */
export function Calendar({
  days,
  weekdays = DEFAULT_WEEKDAYS,
  onSelectDay,
  className,
}: CalendarProps) {
  return (
    <div className={["sw-cal", className].filter(Boolean).join(" ")}>
      <div className="sw-cal__weekdays">
        {weekdays.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
      <div className="sw-cal__grid">
        {days.map((d, i) => {
          if (d.day == null) return <div key={i} />;
          const status = d.status ?? "none";
          const classes = [
            "sw-day",
            `sw-day--${status}`,
            d.today ? "sw-day--today" : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <div
              key={i}
              className={classes}
              onClick={() =>
                status !== "future" && d.day != null && onSelectDay?.(d.day)
              }
            >
              <span className="sw-day__num">{d.day}</span>
              <DayMark day={d} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
