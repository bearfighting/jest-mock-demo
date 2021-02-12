const { combine, combine1 } = require("./service");

jest.mock("./add");
jest.mock("./sub");

describe("combine function test suite", () => {
    it("add combine functions test", () => {
        const res = combine(1, 1);
        expect(res).toEqual(10);
    })

    it("sub combine functions test", () => {
        const res = combine1(1, 1);
        expect(res).toEqual(100);
    })
})
