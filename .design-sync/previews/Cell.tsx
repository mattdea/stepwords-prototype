import { Cell } from "@stepwords/design-system";

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", gap: 6, fontSize: 0 }}>{children}</div>
);

export const Empty = () => (
  <Frame>
    <Cell state="empty" />
  </Frame>
);

export const Solved = () => (
  <Frame>
    <Cell letter="E" state="green" />
    <Cell letter="A" state="yellow" />
    <Cell letter="T" state="assist" />
  </Frame>
);

export const Active = () => (
  <Frame>
    <Cell letter="S" state="cursor" />
    <Cell letter="T" state="active" />
    <Cell state="active" />
  </Frame>
);

export const WithMarker = () => (
  <Frame>
    <Cell state="empty" marker />
  </Frame>
);
