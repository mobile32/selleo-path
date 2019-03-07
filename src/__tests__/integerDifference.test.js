import { integerDifference } from "../integerDifference";

describe("integerDifference", () => {
    test("Write a function that accepts an array of random integers and an integer n. Determine the number of times where two integers in the array have the difference of n.", () => {
        expect(integerDifference(4, [1, 1, 5, 6, 9, 16, 27])).toBe(3);
        expect(integerDifference(2, [1, 1, 3, 3])).toBe(4);
    });
});
