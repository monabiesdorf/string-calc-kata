const {stringCalc} = require ("./string-calc");

describe("stringCalc", () => {
    // empty string
    it ("should return 0 on empty string", () => {
        expect(stringCalc("")).toBe(0)
    }) 

    //base 
    it ("should return 1", () => {
        expect(stringCalc("1")).toBe(1)
    })

    it ("should return 3 on '1,2' ", () => {
        expect(stringCalc("1,2")).toBe(3)
    })

    //multiple
    it ("should return 6 on '1,2,3' ", () => {
        expect(stringCalc("1,2,3")).toBe(6)
    })

    it ("should return 22 on '4,5,6,7' ", () => {
        expect(stringCalc("4,5,6,7")).toBe(22)
    })
    
    //newline
    it ("should return 6 on '1\n2,3' ", () => {
        expect(stringCalc("1\n2,3")).toBe(6)
    })
    
    //delimiter
    it ("should return 3 on '1;2'", () => {
        expect(stringCalc("1;2")).toBe(3)
    })
    
    it ("should return 6 on '1;2/3' ", () => {
        expect(stringCalc("1;2/3")).toBe(6)
    })

    //ignoreThousands
    it ("should return 92 on '90,2' ", () => {
        expect(stringCalc("90,2")).toBe(92)
    })
    
    it ("should return 902 on '900,2' ", () => {
        expect(stringCalc("900,2")).toBe(902)
    })

    it ("should return 1002 on '1000,2' ", () => {
        expect(stringCalc("1000,2")).toBe(1002)
    })

    it ("should return 2 on '1001,2' ", () => {       
        expect(stringCalc("1001,2")).toBe(2)
    })
    
    //negatives
    it("should throw error on negative number", () => {
        expect(stringCalc("-1,5")).toEqual("negatives not allowed")
    })
})

