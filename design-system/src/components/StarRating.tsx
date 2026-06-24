import { StarIcon } from "../icons";

export interface StarRatingProps {
  /** Filled (gold) stars. */
  value: number;
  /** Total stars shown; the remainder render as faint outlines. */
  max?: number;
  /** Star size in pixels. */
  size?: number;
  className?: string;
}

/**
 * The gold star rating shown in the stats bar, completion strip, and archive
 * day cells. Renders the prototype's `.stars` row: filled stars are gold; any
 * remainder fades to the faint ink tint.
 */
export function StarRating({
  value,
  max = 3,
  size = 16,
  className,
}: StarRatingProps) {
  return (
    <span
      className={["stars", className].filter(Boolean).join(" ")}
      role="img"
      aria-label={`${value} of ${max} stars`}
    >
      {Array.from({ length: max }, (_, i) => (
        <StarIcon
          key={i}
          width={size}
          height={size}
          className={i < value ? undefined : "star-off"}
        />
      ))}
    </span>
  );
}
