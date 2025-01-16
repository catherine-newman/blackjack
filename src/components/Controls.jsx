import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const Controls = ({
  gameRunning,
  hitHandler,
  standHandler,
  startGameHandler,
}) => {
  return (
    <Stack spacing={2} direction="row">
      {!gameRunning ? (
        <Button variant="contained" onClick={startGameHandler}>
          Start Game
        </Button>
      ) : (
        <>
          <Button variant="contained" onClick={hitHandler}>
            Hit
          </Button>
          <Button variant="contained" onClick={standHandler}>
            Stand
          </Button>
        </>
      )}
    </Stack>
  );
};
