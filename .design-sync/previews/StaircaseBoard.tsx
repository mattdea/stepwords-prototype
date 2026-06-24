import { StaircaseBoard } from "@stepwords/design-system";
import type { BoardRow } from "@stepwords/design-system";

// A partially-solved EAT → RATE → TEARS → STARED → ASTRIDE ladder.
const rows: BoardRow[] = [
  { letters: ["E", "A", "T"], states: ["green", "green", "green"], markerIndex: 0 },
  {
    letters: ["R", "A", "T", "E"],
    states: ["green", "green", "green", "yellow"],
    markerIndex: 0,
  },
  {
    letters: ["T", "E", "A", "R", "S"],
    states: ["green", "green", "green", "green", "assist"],
    markerIndex: 4,
  },
  {
    letters: ["S", "T", "A", "R", "E", "D"],
    states: ["cursor", "active", "active", "active", "active", "active"],
    markerIndex: 5,
    selected: true,
  },
  {
    letters: ["", "", "", "", "", "", ""],
    states: ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    markerIndex: 6,
  },
];

export const PartiallySolved = () => (
  <div style={{ maxWidth: 320 }}>
    <StaircaseBoard rows={rows} />
  </div>
);

export const FreshPuzzle = () => (
  <div style={{ maxWidth: 320 }}>
    <StaircaseBoard
      rows={[
        { letters: ["", "", ""], markerIndex: 0, selected: true },
        { letters: ["", "", "", ""], markerIndex: 0 },
        { letters: ["", "", "", "", ""], markerIndex: 4 },
        { letters: ["", "", "", "", "", ""], markerIndex: 5 },
      ]}
    />
  </div>
);
