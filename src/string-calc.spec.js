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

    it ("should return 6 on '1,2,3' ", () => {
        expect(stringCalc("1,2,3")).toBe(6)
    })

    it ("should return 22 on '4,5,6,7' ", () => {
        expect(stringCalc("4,5,6,7")).toBe(22)
    })

    it ("should return 6 on '1\n2,3' ", () => {
        expect(stringCalc("1\n2,3")).toBe(6)
    })

    it ("should return 3 on '1;2' ", () => {
        expect(stringCalc("1;2")).toBe(3)
    })

    it ("should return 6 on '1;2/3' ", () => {
        expect(stringCalc("1;2/3")).toBe(6)
    })

})

