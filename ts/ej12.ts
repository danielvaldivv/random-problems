// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
let onlyEvenValues: Array<number> = []

let onlyEvenValuesFunction =  (arr: number[]) =>  {
    arr.forEach( element => element % 2 === 0 ?onlyEvenValues.push(element) :null );
    console.log(onlyEvenValues);
}

console.log(onlyEvenValuesFunction([5,1,2,3,10]));