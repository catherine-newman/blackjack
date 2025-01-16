import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { DeckCard } from "./DeckCard";

export const Hand = ({ hand }) => {
  return (
    <>
      <Divider
        variant="middle"
        sx={{
          margin: 2,
        }}
      />
      <Stack spacing={2} display="flex" alignItems="center" direction="row">
        {hand.map((card, i) => {
          return <DeckCard key={i} card={card} />;
        })}
      </Stack>
    </>
  );
};
