export const calculateHand = (hand) => {
  if (!hand.length) return 0;
  let score = 0;
  let aceCount = 0;

  hand.forEach((card) => {
    if (card.name === "ace") {
      aceCount++;
    }
    score += card.value;
  });

  while (score > 21 && aceCount > 0) {
    score -= 10;
    aceCount--;
  }
  return score;
};

export const checkLose = (score) => {
  if (score > 21) return true;
  return false;
};
