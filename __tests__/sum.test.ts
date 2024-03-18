import { sum } from "../src/sum";

describe("sum", () => {
  it("should return input a + b", () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });
  it("should return input a + b", () => {
    const result = sum(4, 2);
    expect(result).toBe(6);
  });
});


