import { StarIcon } from "../icons";

export interface StarRatingProps {
  /** Number of gold stars to show (the prototype renders exactly this many —
   *  no empty/placeholder stars). */
  value: number;
  /** Star size in pixels. */
  size?: number;
  className?: string;
}

/**
 * The gold star rating shown in the stats bar, completion strip, and archive
 * day cells (prototype `.stars`). Renders exactly `value` gold stars — the
 * prototype never draws empty remainder stars.
 */
export function StarRating({ value, size = 17, className }: StarRatingProps) {
  return (
    <span
      className={["stars", className].filter(Boolean).join(" ")}
      role="img"
      aria-label={`${value} star${value === 1 ? "" : "s"}`}
    >
      {Array.from({ length: value }, (_, i) => (
        <StarIcon key={i} width={size} height={size} />
      ))}
    </span>
  );
}
