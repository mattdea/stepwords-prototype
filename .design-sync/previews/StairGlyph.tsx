import { StairGlyph } from "@stepwords/design-system";

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", gap: 28, alignItems: "flex-end" }}>
    {children}
  </div>
);

export const Variants = () => (
  <Frame>
    <StairGlyph />
    <StairGlyph gold />
  </Frame>
);
