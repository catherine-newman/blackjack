import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const DeckCard = ({ card }) => {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography align="center">{`${card.name} of ${card.suit}`}</Typography>
      </CardContent>
    </Card>
  );
};
