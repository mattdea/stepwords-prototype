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

/** A day cell's status indicator (stars / dot / x), prototype `.pips`/`.dot`/`.xmark`. */
function DayMark({ day }: { day: CalendarDay }) {
  if (day.status === "completed") {
    return (
      <span className="pips">
        {Array.from({ length: day.stars ?? 0 }, (_, i) => (
          <StarIcon key={i} viewBox="0 0 640 640" />
        ))}
      </span>
    );
  }
  if (day.status === "progress") return <span className="dot" />;
  if (day.status === "failed")
    return (
      <span className="xmark">
        <XmarkIcon />
      </span>
    );
  // not-played / future days carry no indicator child, matching the prototype
  return null;
}

/**
 * The archive month calendar (prototype `.arch-cal`). Each day cell carries one
 * of four play states — completed (gold stars), in-progress (dot), failed (x),
 * or untouched — and today gets an accent ring.
 */
export function Calendar({
  days,
  weekdays = DEFAULT_WEEKDAYS,
  onSelectDay,
  className,
}: CalendarProps) {
  return (
    <div className={["arch-cal", className].filter(Boolean).join(" ")}>
      <div className="arch-weekdays">
        {weekdays.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
      <div className="arch-grid">
        {days.map((d, i) => {
          if (d.day == null) return <div className="day blank" key={i} />;
          const status = d.status ?? "none";
          // the prototype's not-played past day uses the class `empty`
          const statusClass = status === "none" ? "empty" : status;
          const classes = ["day", statusClass, d.today ? "today" : ""]
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
              <span className="dnum">{d.day}</span>
              <DayMark day={d} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
