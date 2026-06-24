import { StarRating } from "@stepwords/design-system";

const Stack = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
    {children}
  </div>
);

export const ThreeStars = () => (
  <Stack>
    <StarRating value={3} />
  </Stack>
);

export const TwoStars = () => (
  <Stack>
    <StarRating value={2} />
  </Stack>
);

export const Large = () => (
  <Stack>
    <StarRating value={3} size={28} />
  </Stack>
);
