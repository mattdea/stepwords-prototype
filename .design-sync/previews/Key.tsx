import { Key } from "@stepwords/design-system";

const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", gap: 5, alignItems: "center" }}>{children}</div>
);

export const Letters = () => (
  <Row>
    <Key label="A" available />
    <Key label="S" available />
    <Key label="Q" />
  </Row>
);

export const Submit = () => (
  <Row>
    <Key label="Submit" wide submit />
  </Row>
);

export const Action = () => (
  <Row>
    <Key label="⌫" wide />
  </Row>
);
