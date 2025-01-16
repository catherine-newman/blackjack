import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const DeckCard = ({ card }) => {
  return (
    <Card
      sx={{
        width: 100,
        height: 150,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Typography align="center">{`${card.name} of ${card.suit}`}</Typography>
      </CardContent>
    </Card>
  );
};
