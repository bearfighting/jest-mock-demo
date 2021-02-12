const { combine, combine1 } = require("./service");
const addition = require("./add");
const sub = require("./sub");

// jest.mock("./add");
jest.mock("./add", () => {
    return {
        add: jest.fn(() => 1)
    };
});
// jest.mock("./sub");
jest.mock("./sub", () => {
    return jest.fn(() => 10);
});

describe("combine function test suite", () => {
    it("add combine functions test", () => {
        // addition.add.mockReturnValue(1);
        const res = combine(1, 1);
        expect(res).toEqual(10);
    })

    it("sub combine functions test", () => {
        // sub.mockReturnValue(10);
        const res = combine1(1, 1);
        expect(res).toEqual(100);
    })
})
