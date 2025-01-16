import { generateDeck, drawCard } from "../utils/deckUtils";
import { checkLose, calculateHand } from "../utils/handUtils";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { Controls } from "./Controls";
import { Hand } from "./Hand";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GAME_STATE } from "../constants/game";

export const Game = () => {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [gameState, setGameState] = useState(GAME_STATE.IDLE);
  const [score, setScore] = useState(0);

  const startGameHandler = () => {
    const newDeck = generateDeck();
    setPlayerHand([drawCard(newDeck), drawCard(newDeck)]);
    setDeck(newDeck);
    setGameState(GAME_STATE.RUNNING);
  };

  const renderMessage = () => {
    if (gameState === GAME_STATE.RUNNING) {
      return `Score: ${score}`;
    }
    if (gameState === GAME_STATE.WIN) {
      return `Final score: ${score}`;
    }
    if (gameState === GAME_STATE.LOSE) {
      return `Bust! Final score: ${score}`;
    }
    return "Press start to begin";
  };

  const hitHandler = () => {
    setDeck((prevDeck) => {
      const newDeck = [...prevDeck];
      const newCard = drawCard(newDeck);
      if (!newCard) {
        setGameState(GAME_STATE.WIN);
        return;
      }
      setPlayerHand((prevHand) => [newCard, ...prevHand]);
      return newDeck;
    });
  };

  const standHandler = () => {
    setGameState(GAME_STATE.WIN);
  };

  useEffect(() => {
    const newScore = calculateHand(playerHand);
    setScore(newScore);
    if (checkLose(newScore)) {
      setGameState(GAME_STATE.LOSE);
    }
  }, [playerHand]);

  return (
    <Container sx={{ height: "100vh", maxWidth: "sm" }}>
      <Box
        sx={{
          marginY: 2,
          textAlign: "center",
        }}
      >
        <Typography>{renderMessage()}</Typography>
      </Box>
      <Controls
        gameState={gameState}
        startGameHandler={startGameHandler}
        standHandler={standHandler}
        hitHandler={hitHandler}
      />
      <Hand hand={playerHand} />
    </Container>
  );
};
