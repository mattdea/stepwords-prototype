import { Calendar } from "@stepwords/design-system";
import type { CalendarDay } from "@stepwords/design-system";

// A month with a realistic mix of play states.
const days: CalendarDay[] = [
  // two leading blanks so the 1st lands on a Tuesday
  {},
  {},
  { day: 1, status: "completed", stars: 3 },
  { day: 2, status: "completed", stars: 2 },
  { day: 3, status: "failed" },
  { day: 4, status: "completed", stars: 3 },
  { day: 5, status: "completed", stars: 1 },
  { day: 6, status: "none" },
  { day: 7, status: "completed", stars: 2 },
  { day: 8, status: "completed", stars: 3 },
  { day: 9, status: "progress" },
  { day: 10, status: "completed", stars: 3 },
  { day: 11, status: "failed" },
  { day: 12, status: "none" },
  { day: 13, status: "completed", stars: 2 },
  { day: 14, status: "completed", stars: 3, today: true },
  { day: 15, status: "future" },
  { day: 16, status: "future" },
  { day: 17, status: "future" },
  { day: 18, status: "future" },
  { day: 19, status: "future" },
];

export const Month = () => (
  <div style={{ maxWidth: 360 }}>
    <Calendar days={days} />
  </div>
);
