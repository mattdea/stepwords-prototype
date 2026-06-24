import { ClueBar } from "@stepwords/design-system";

export const Default = () => (
  <div style={{ maxWidth: 420 }}>
    <ClueBar clue="Looked fixedly" length={6} />
  </div>
);

export const ShortClue = () => (
  <div style={{ maxWidth: 420 }}>
    <ClueBar clue="Have a meal" length={3} />
  </div>
);
