import { DeckCard } from "./DeckCard";
import { render, screen } from "@testing-library/react";

describe("DeckCard", () => {
  test("renders the card with the correct name and suit", () => {
    render(<DeckCard card={{ suit: "hearts", name: "ace", value: 11 }} />);
    expect(screen.getByText(/ace of hearts/i)).toBeInTheDocument();

    render(<DeckCard card={{ suit: "spades", name: "2", value: 2 }} />);
    expect(screen.getByText(/2 of spades/i)).toBeInTheDocument();
  });
});
