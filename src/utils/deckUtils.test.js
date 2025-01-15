import { generateDeck, drawCard } from "./deckUtils";

describe("generateDeck", () => {
  test("generates a deck of 52 unique cards with value, name and suit", () => {
    const deck = generateDeck();

    expect(deck).toHaveLength(52);

    const seenCards = new Set();
    deck.forEach((card) => {
      expect(card).toHaveProperty("value");
      expect(card).toHaveProperty("name");
      expect(card).toHaveProperty("suit");
      const cardString = JSON.stringify(card);
      expect(seenCards.has(cardString)).toBe(false);
      seenCards.add(cardString);
    });
  });

  test("generates a deck with 13 cards of each suit ", () => {
    const deck = generateDeck();

    const suitCounts = { hearts: 0, diamonds: 0, spades: 0, clubs: 0 };

    deck.forEach((card) => {
      suitCounts[card.suit]++;
    });
    Object.values(suitCounts).forEach((count) => {
      expect(count).toBe(13);
    });
  });
});

describe("drawCard", () => {
  test("returns last card and removes it from the deck", () => {
    const deck = generateDeck();
    const lastCard = deck[deck.length - 1];
    const drawnCard = drawCard(deck);
    expect(drawnCard).toEqual(lastCard);
    expect(deck).toHaveLength(51);
  });

  test("returns null if deck is empty", () => {
    const deck = [];
    const drawnCard = drawCard(deck);
    expect(drawnCard).toEqual(null);
  });
});
