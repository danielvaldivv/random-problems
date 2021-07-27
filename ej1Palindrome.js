// var array
// function palindrome(textAp, separate) {
//     array = textAp.split(separate);
//     console.log(array)
// }

// palindrome("hola")
// console.log(array)

// let str = 'soylenin';
// let arr = str.split('');
// console.log(arr); 

function palindromeEval(text) {
    let textIn = text.toLowerCase().replace(/ /g, "").split('')
    let arrayAdd= textIn.toString()
    // console.log(arrayAdd)
    let newArray = textIn.reverse()
    // console.log(newArray)
    let textNewArrayConcat = newArray.toString()
    // console.log(textNewArrayConcat)


    if (arrayAdd === textNewArrayConcat){
        console.log("You are the best ♥")
    } else {
        console.log("You are wrong")
    }
}

palindromeEval('Anita lava la tina')