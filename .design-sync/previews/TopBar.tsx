import { TopBar } from "@stepwords/design-system";

export const Game = () => (
  <div style={{ maxWidth: 420 }}>
    <TopBar
      title="Stepwords"
      subtitle="Sunday, June 22"
      onBack={() => {}}
      onInfo={() => {}}
      onMenu={() => {}}
    />
  </div>
);

export const Simple = () => (
  <div style={{ maxWidth: 420 }}>
    <TopBar title="Archives" onBack={() => {}} />
  </div>
);
