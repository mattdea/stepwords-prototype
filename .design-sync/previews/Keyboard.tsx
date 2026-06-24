import { Keyboard } from "@stepwords/design-system";

export const Full = () => (
  <div style={{ maxWidth: 380 }}>
    <Keyboard />
  </div>
);

// Mid-game: only the letters still in the pool read at full ink.
export const WithAvailableLetters = () => (
  <div style={{ maxWidth: 380 }}>
    <Keyboard available={["S", "T", "A", "R", "E", "D", "I"]} />
  </div>
);

export const LettersOnly = () => (
  <div style={{ maxWidth: 380 }}>
    <Keyboard showActions={false} />
  </div>
);
