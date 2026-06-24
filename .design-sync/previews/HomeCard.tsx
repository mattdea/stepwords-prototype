import {
  HomeCard,
  StairGlyph,
  CreateGlyph,
  Button,
} from "@stepwords/design-system";

export const Daily = () => (
  <div style={{ maxWidth: 360 }}>
    <HomeCard
      lead
      title="Daily Stepword"
      description="8 words · Today's main"
      icon={<StairGlyph />}
      action={
        <Button variant="primary" compact>
          Play
        </Button>
      }
    />
  </div>
);

export const Quick = () => (
  <div style={{ maxWidth: 360 }}>
    <HomeCard
      title="Quick Stepword"
      description="5 words · A shorter ladder"
      icon={<StairGlyph gold />}
    />
  </div>
);

export const Create = () => (
  <div style={{ maxWidth: 360 }}>
    <HomeCard
      title="Create a Stepword"
      description="Build your own ladder"
      icon={<CreateGlyph />}
    />
  </div>
);
