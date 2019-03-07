import { longestWords } from "../longestWords";

describe("longestWords", () => {
  test("Calculate the sum of an array which contains integers and other arrays with integers. ", () => {
    expect(longestWords("You are just an old antidisestablishmentarian")).toEqual([
      "antidisestablishmentarian"
    ]);
    expect(longestWords("I gave a present to my parents")).toEqual([
      "present",
      "parents"
    ]);
    expect(
      longestWords(
        "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"
      )
    ).toIncludeAnyMembers(["buffalo"], ["Buffalo"]);
  });
});
