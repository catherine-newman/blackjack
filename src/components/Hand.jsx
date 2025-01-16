import Stack from "@mui/material/Stack";
import { DeckCard } from "./DeckCard";

export const Hand = ({ hand }) => {
  return (
    <Stack spacing={2} display="flex" alignItems="center" direction="row">
      {hand.map((card, i) => {
        return <DeckCard key={i} card={card} />;
      })}
    </Stack>
  );
};
