import { Game } from "../Game";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { generateDeck } from "../../utils/deckUtils";

vi.mock(import("../../utils/deckUtils"), async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    generateDeck: vi.fn(),
  };
});

const user = userEvent.setup();

describe("Game", () => {
  test("renders start button and prompt when game first loads", () => {
    vi.mocked(generateDeck).mockReturnValue([
      { suit: "hearts", name: "jack", value: 10 },
      { suit: "spades", name: "2", value: 2 },
      { suit: "diamonds", name: "6", value: 6 },
    ]);
    render(<Game />);
    expect(
      screen.getByRole("button", { name: /start game/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/press start to begin/i)).toBeInTheDocument();
  });

  test("deals and displays 2 cards and score to the player as an opening hand", async () => {
    vi.mocked(generateDeck).mockReturnValue([
      { suit: "hearts", name: "jack", value: 10 },
      { suit: "spades", name: "2", value: 2 },
      { suit: "diamonds", name: "6", value: 6 },
    ]);
    render(<Game />);

    const startButton = screen.getByRole("button", { name: /start game/i });
    await user.click(startButton);

    const cards = screen.getAllByTestId("deck-card");
    expect(cards).toHaveLength(2);
    expect(screen.getByText(/score/i)).toBeInTheDocument();
  });

  test("displays an additional card and updates score when user hits", async () => {
    vi.mocked(generateDeck).mockReturnValue([
      { suit: "hearts", name: "jack", value: 10 },
      { suit: "spades", name: "2", value: 2 },
      { suit: "diamonds", name: "6", value: 6 },
    ]);
    render(<Game />);

    const startButton = screen.getByRole("button", { name: /start game/i });
    await user.click(startButton);

    expect(screen.getByText(/score: 8/i)).toBeInTheDocument();

    const hitButton = screen.getByRole("button", { name: /hit/i });
    await user.click(hitButton);

    const cards = screen.getAllByTestId("deck-card");
    expect(cards).toHaveLength(3);

    expect(screen.getByText(/score: 18/i)).toBeInTheDocument();
  });

  test("displays the final score when user stands", async () => {
    vi.mocked(generateDeck).mockReturnValue([
      { suit: "hearts", name: "jack", value: 10 },
      { suit: "spades", name: "2", value: 2 },
      { suit: "diamonds", name: "6", value: 6 },
    ]);
    render(<Game />);

    const startButton = screen.getByRole("button", { name: /start game/i });
    await user.click(startButton);

    const standButton = screen.getByRole("button", { name: /stand/i });
    await user.click(standButton);

    const cards = screen.getAllByTestId("deck-card");
    expect(cards).toHaveLength(2);

    expect(screen.getByText(/final score: 8/i)).toBeInTheDocument();
  });

  test("displays losing message if user goes bust", async () => {
    vi.mocked(generateDeck).mockReturnValue([
      { suit: "hearts", name: "6", value: 6 },
      { suit: "hearts", name: "3", value: 3 },
      { suit: "hearts", name: "2", value: 2 },
      { suit: "spades", name: "king", value: 10 },
      { suit: "diamonds", name: "6", value: 4 },
    ]);
    render(<Game />);

    const startButton = screen.getByRole("button", { name: /start game/i });
    await user.click(startButton);

    expect(screen.getByText(/score: 14/i)).toBeInTheDocument();

    const hitButton = screen.getByRole("button", { name: /hit/i });

    await user.click(hitButton);
    expect(screen.getByText(/score: 16/i)).toBeInTheDocument();
    await user.click(hitButton);
    expect(screen.getByText(/score: 19/i)).toBeInTheDocument();
    await user.click(hitButton);
    expect(screen.getByText(/bust! final score: 25/i)).toBeInTheDocument();

    const cards = screen.getAllByTestId("deck-card");
    expect(cards).toHaveLength(5);
  });
});
