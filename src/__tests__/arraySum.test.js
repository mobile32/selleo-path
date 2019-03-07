import { arraySum } from "../arraySum";

describe("arraySum", () => {
    test("Calculate the sum of an array which contains integers and other arrays with integers. ", () => {
        expect(arraySum([1,2,[3,4,[5]]])).toBe(15);
    });
});
