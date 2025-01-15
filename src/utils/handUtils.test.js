import { calculateHand, checkLose } from "./handUtils";

describe("calculateHand", () => {
  test("returns 0 if hand is empty", () => {
    const score = calculateHand([]);
    expect(score).toBe(0);
  });

  test("returns accurate score with number cards", () => {
    const hand = [
      { suit: "hearts", name: "2", value: 2 },
      { suit: "spades", name: "8", value: 8 },
      { suit: "diamonds", name: "4", value: 4 },
      { suit: "clubs", name: "6", value: 6 },
    ];
    const score = calculateHand(hand);
    expect(score).toBe(20);
  });

  test("returns accurate score with face cards", () => {
    const hand = [
      { suit: "hearts", name: "jack", value: 10 },
      { suit: "spades", name: "queen", value: 10 },
      { suit: "diamonds", name: "king", value: 10 },
      { suit: "clubs", name: "jack", value: 10 },
    ];
    const score = calculateHand(hand);
    expect(score).toBe(40);
  });

  test("returns accurate score with ace card as 11", () => {
    const hand = [
      { suit: "spades", name: "4", value: 4 },
      { suit: "diamonds", name: "ace", value: 11 },
    ];
    const score = calculateHand(hand);
    expect(score).toBe(15);
  });

  test("changes ace card to 1 if score goes over 21", () => {
    const hand = [
      { suit: "hearts", name: "jack", value: 10 },
      { suit: "spades", name: "2", value: 2 },
      { suit: "diamonds", name: "ace", value: 11 },
    ];
    const score = calculateHand(hand);
    expect(score).toBe(13);
  });

  test("handles multiple ace cards", () => {
    const hand = [
      { suit: "hearts", name: "ace", value: 11 },
      { suit: "diamonds", name: "ace", value: 11 },
    ];
    const score = calculateHand(hand);
    expect(score).toBe(12);
  });
});

describe("checkLose", () => {
  test("returns true if hand value is over 21", () => {
    expect(checkLose(22)).toBe(true);
  });

  test("returns false if hand value is 21 or under", () => {
    expect(checkLose(21)).toBe(false);
    expect(checkLose(1)).toBe(false);
    expect(checkLose(0)).toBe(false);
  });
});
