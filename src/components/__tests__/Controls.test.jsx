import { Controls } from "../Controls";
import { render, screen } from "@testing-library/react";
import { GAME_STATE } from "../../constants/game";

describe("Controls", () => {
  test("renders the start button when game first loads", () => {
    render(<Controls gameState={GAME_STATE.IDLE} />);
    expect(
      screen.getByRole("button", { name: /start game/i })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /hit/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /stand/i })
    ).not.toBeInTheDocument();
  });

  test("renders the start button when game is lost", () => {
    render(<Controls gameState={GAME_STATE.LOSE} />);
    expect(
      screen.getByRole("button", { name: /start game/i })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /hit/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /stand/i })
    ).not.toBeInTheDocument();
  });

  test("renders the start button when game is won", () => {
    render(<Controls gameState={GAME_STATE.WIN} />);
    expect(
      screen.getByRole("button", { name: /start game/i })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /hit/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /stand/i })
    ).not.toBeInTheDocument();
  });

  test("renders the hit and stand buttons when game is running", () => {
    render(<Controls gameState={GAME_STATE.RUNNING} />);
    expect(screen.getByRole("button", { name: /hit/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /stand/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /start game/i })
    ).not.toBeInTheDocument();
  });
});
