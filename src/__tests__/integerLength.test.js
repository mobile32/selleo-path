import { integerLength } from "../integerLength";

describe("integerLength", () => {
    test("Write a function that takes an integer as input and returns the number of digits in that integer.", () => {
        expect(integerLength(1122)).toEqual(4);
    });
});
