const {stringCalc} = require ("./string-calc");

describe("stringCalc", () => {
    it ("should return 0 on empty string", () => {
        expect(stringCalc("")).toBe(0)
    }) 

    it ("should return 1", () => {
        expect(stringCalc("1")).toBe(1)
    })

    it ("should return 3 on '1,2' ", () => {
        expect(stringCalc("1,2")).toBe(3)
    })
})

