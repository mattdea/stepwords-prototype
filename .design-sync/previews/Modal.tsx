import { Modal, Button } from "@stepwords/design-system";

// The card is rendered inside a positioned frame so the absolute overlay has
// a box to fill within the preview cell.
const Frame = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      position: "relative",
      width: 380,
      height: 300,
      background: "var(--bg)",
      borderRadius: 16,
      overflow: "hidden",
    }}
  >
    {children}
  </div>
);

export const HowToPlay = () => (
  <Frame>
    <Modal
      title="How to play"
      footer={<Button variant="primary">Got it</Button>}
    >
      Each row is an anagram of the row above plus one new letter. Solve the
      ladder from three letters up to ten.
    </Modal>
  </Frame>
);

export const Info = () => (
  <Frame>
    <Modal info title="Stepwords">
      Today's puzzle was created and submitted by Ben Reich. Anyone can submit a
      Stepwords puzzle at stepwords.xyz.
    </Modal>
  </Frame>
);
