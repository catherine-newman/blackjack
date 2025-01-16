import { expect } from "vitest";
import { Controls } from "./Controls";
import { render, screen } from "@testing-library/react";

describe("Controls", () => {
  test("renders the start button when game is not running", () => {
    render(<Controls gameRunning={false} />);
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
    render(<Controls gameRunning={true} />);
    expect(screen.getByRole("button", { name: /hit/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /stand/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /start game/i })
    ).not.toBeInTheDocument();
  });
});
