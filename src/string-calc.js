function stringCalc(numbers){
    
    const stringList = numbers.split( /\D+/g)
    const numList = stringList.map((x) => parseInt(x, 10))

    console.log(stringList)
    

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