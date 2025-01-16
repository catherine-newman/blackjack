import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { GAME_STATE } from "../constants/game";

export const Controls = ({
  gameState,
  hitHandler,
  standHandler,
  startGameHandler,
}) => {
  return (
    <Stack
      spacing={2}
      direction="row"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {gameState !== GAME_STATE.RUNNING ? (
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
