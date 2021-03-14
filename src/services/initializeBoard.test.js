import { initializeBoard } from "./initializeBoard";

describe("initializeBoard", () => {
  it("should return an array with 7 nested arrays, each containing 6 zeros", () => {
    const expectedArray = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    const initialArray = initializeBoard();
    expect(initialArray).toStrictEqual(expectedArray);
  });
});
