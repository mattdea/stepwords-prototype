import { SegmentedToggle } from "@stepwords/design-system";

export const MainQuick = () => (
  <SegmentedToggle options={["Main", "Quick"]} value="Main" />
);

export const QuickSelected = () => (
  <SegmentedToggle options={["Main", "Quick"]} value="Quick" />
);
