const { combine, combine1 } = require("./service");

describe("combine function test suite1", () => {
    it("add combine functions test", () => {
        const res = combine(1, 1);
        expect(res).toEqual(20);
    })

    it("sub combine1 function test", () => {
        const res = combine1(1, 1);
        expect(res).toEqual(0);
    })
})
