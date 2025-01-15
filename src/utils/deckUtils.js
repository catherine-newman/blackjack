import { CARD_VALUES, SUITS, CARD_NAMES } from "../constants/deck.js";

export const createDeck = () => {
  const deck = SUITS.flatMap((suit) =>
    CARD_NAMES.map((name) => {
      return { suit, name, value: CARD_VALUES[name] };
    })
  );
  return deck;
};

export const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

export const generateDeck = () => {
  const deck = createDeck();
  const shuffledDeck = shuffleDeck(deck);
  return shuffledDeck;
};

export const drawCard = (deck) => {
  if (!deck.length) return null;
  return deck.pop();
};
