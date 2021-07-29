function palindromeEval(text) {
    let textIn = text.toLowerCase().replace(/ /g, "").split('')
    let arrayAdd= textIn.toString()
    console.log(arrayAdd)
    let newArray = textIn.reverse()
    console.log(newArray)
    let textNewArrayConcat = newArray.toString()
    console.log(textNewArrayConcat)


    if (arrayAdd === textNewArrayConcat){
        console.log("You are the best ♥")
    } else {
        console.log("You are wrong")
    }
}

palindromeEval('Anita lava la tina');