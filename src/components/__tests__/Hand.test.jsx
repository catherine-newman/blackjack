import { Hand } from "../Hand";
import { render, screen } from "@testing-library/react";

describe("Hand", () => {
  test("renders each card in the hand", () => {
    render(
      <Hand
        hand={[
          { suit: "hearts", name: "ace", value: 11 },
          { suit: "spades", name: "2", value: 2 },
        ]}
      />
    );
    expect(screen.getByText(/ace of hearts/i)).toBeInTheDocument();
    expect(screen.getByText(/2 of spades/i)).toBeInTheDocument();
  });
});
