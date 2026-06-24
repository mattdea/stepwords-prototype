import { Button } from "@stepwords/design-system";

// A small inline chevron so the icon variant reads as a real chrome button.
const Chevron = () => (
  <svg viewBox="0 0 320 512" width={15} height={15} aria-hidden>
    <path
      fill="currentColor"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </svg>
);

export const Primary = () => <Button variant="primary">Play</Button>;

export const Compact = () => (
  <Button variant="primary" compact>
    Play
  </Button>
);

export const Icon = () => (
  <Button variant="icon" aria-label="Back" icon={<Chevron />} />
);

export const Text = () => <Button variant="text">Back to home</Button>;

export const Disabled = () => (
  <Button variant="primary" disabled>
    Submit
  </Button>
);
