import { substrings } from "../substrings";

describe("substrings", () => {
  test("Output all the possible substrings of a given string.", () => {
    expect(substrings("abc").sort()).toEqual(["a", "b", "c", "ab", "bc", "abc"].sort());
  });
});
