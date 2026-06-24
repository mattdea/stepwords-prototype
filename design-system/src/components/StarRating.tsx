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
 * The gold three-star rating shown in the stats bar, completion strip, and
 * archive day cells. Filled stars are gold; the rest fade to the faint ink
 * tint so the rating reads at a glance.
 */
export function StarRating({
  value,
  max = 3,
  size = 16,
  className,
}: StarRatingProps) {
  return (
    <span
      className={["sw-stars", className].filter(Boolean).join(" ")}
      role="img"
      aria-label={`${value} of ${max} stars`}
    >
      {Array.from({ length: max }, (_, i) => (
        <StarIcon
          key={i}
          width={size}
          height={size}
          className={i < value ? undefined : "sw-star--off"}
        />
      ))}
    </span>
  );
}
