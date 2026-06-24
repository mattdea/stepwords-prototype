import type { SVGProps } from "react";

/**
 * Stepwords iconography — Font Awesome Free v7 glyph paths plus the custom
 * rounded "stairs" mark used for the new-letter cell. Each is a plain SVG that
 * inherits `currentColor`, so callers control size and color via CSS.
 */

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 576 512" aria-hidden focusable={false} {...props}>
      <path
        fill="currentColor"
        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
      />
    </svg>
  );
}

export function StairsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 576 512" aria-hidden focusable={false} {...props}>
      <path
        fill="currentColor"
        d="M326.8 101.6C326.8 80.2494 344.049 63 365.4 63H519.8C541.151 63 558.4 80.2494 558.4 101.6C558.4 122.951 541.151 140.2 519.8 140.2H404V256C404 277.351 386.751 294.6 365.4 294.6H249.6V410.4C249.6 431.751 232.351 449 211 449H56.6C31.8719 449 18 434.5 18 410.4C18 389.049 35.2494 371.8 56.6 371.8H172.4V256C172.4 234.649 189.649 217.4 211 217.4H326.8V101.6Z"
      />
    </svg>
  );
}

export function LightbulbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 384 512" aria-hidden focusable={false} {...props}>
      <path
        fill="currentColor"
        d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9 3.7 5.3 8.1 11.3 12.8 17.7l0 .2c12.9 17.7 28.3 38.9 39.8 59.8 10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5-9.9-18-22.2-34.9-34.5-51.8l0-.1c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176 16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.3 100.3-5 7.2-10.2 14.3-15.4 21.4l0 .1c-12.3 16.9-24.6 33.8-34.5 51.8-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.5 18.3-57.5 11.5-20.9 26.9-42.1 39.8-59.8l0-.2c4.7-6.4 9.1-12.4 12.8-17.7zM192 512c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"
      />
    </svg>
  );
}

export function InfoIcon(props: SVGProps<SVGSVGElement>) {
  // The prototype's thin "i" mark (no enclosing circle), viewBox 192×512.
  return (
    <svg viewBox="0 0 192 512" aria-hidden focusable={false} {...props}>
      <path
        fill="currentColor"
        d="M48 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM0 192c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 256 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-224-32 0c-17.7 0-32-14.3-32-32z"
      />
    </svg>
  );
}

export function EllipsisIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 448 512" aria-hidden focusable={false} {...props}>
      <path
        fill="currentColor"
        d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
      />
    </svg>
  );
}

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 512" aria-hidden focusable={false} {...props}>
      <path
        fill="currentColor"
        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
      />
    </svg>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 512" aria-hidden focusable={false} {...props}>
      <path
        fill="currentColor"
        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
      />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden focusable={false} {...props}>
      <path
        fill="currentColor"
        d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
      />
    </svg>
  );
}

export function ShareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden focusable={false} {...props}>
      <path
        fill="currentColor"
        d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32S0 334.3 0 352l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"
      />
    </svg>
  );
}

export function XmarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 384 512" aria-hidden focusable={false} {...props}>
      <path
        fill="currentColor"
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      />
    </svg>
  );
}

export function PencilIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden focusable={false} {...props}>
      <path
        fill="currentColor"
        d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L301.5 89.5l-11.3 11.3-22.6 22.6L58.6 332.3c-10.4 10.4-18 23.3-22.2 37.4L1 488.5c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l118.7-35.4c14.1-4.2 27-11.8 37.4-22.2l209-209 22.7-22.7zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
      />
    </svg>
  );
}
