function stringCalc(numbers) {

    const stringList = numbers.split(/[^\d+-]+/g)
    const negatives = []
    const numList = stringList.map((x) => {
        let number = parseInt(x, 10)
        if (number > 1000) {
            number = 0
        }
        
        return number
    }
    )
    numList.map ((x) => {
        if (x < 0) {
        negatives.push(x)    
        }
    })

    if (negatives.length > 0) {
        return "negatives not allowed"
    }

    if (numbers === "") {
        return 0
    }

    let sum = 0
    numList.forEach((x) => {
        sum += x
    })

    return sum
}


module.exports = {
    stringCalc
}