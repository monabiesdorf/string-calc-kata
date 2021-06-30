function stringCalc(numbers){
    const stringList = numbers.split(',')
    const numList = stringList.map((x) => parseInt(x, 10))
    

    if(numbers === "") 
    {
        return 0
    }
    let sum = 0;
    numList.forEach((x) => {
        sum += x
    })

        return sum
}


module.exports = {
    stringCalc
}