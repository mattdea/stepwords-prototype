import {
  HomeCard,
  StairGlyph,
  CreateGlyph,
  Button,
} from "@stepwords/design-system";

// Home cards run the full phone width in the app; give the preview a matching
// column so the lead card's title and Play button don't collide.
const Frame = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 440, maxWidth: "100%" }}>{children}</div>
);

export const Daily = () => (
  <Frame>
    <HomeCard
      lead
      title="Daily Puzzle"
      description="8 words · Today's main"
      icon={<StairGlyph />}
      action={
        <Button variant="primary" compact>
          Play
        </Button>
      }
    />
  </Frame>
);

export const Quick = () => (
  <Frame>
    <HomeCard
      title="Quick"
      description="5 words · A shorter challenge"
      icon={<StairGlyph gold />}
    />
  </Frame>
);

export const Create = () => (
  <Frame>
    <HomeCard
      title="Create"
      description="Submit your own puzzle"
      icon={<CreateGlyph />}
    />
  </Frame>
);
