function stringCalc(numbers){
    const result = numbers.split(',')
    const firstSummand = parseInt(result[0])
    const secondSummand = (result[1] === undefined)?0:parseInt(result[1], 10) 
    if(numbers === "") 
    {
        return 0
    }

        return firstSummand + secondSummand
}


module.exports = {
    stringCalc
}