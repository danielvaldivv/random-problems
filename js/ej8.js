"use strict";
// Take an array of numbers and make them strings
function stringItUp(arr) {
    let newArray = arr.map(function (number) { return number.toString(); });
    console.log(newArray);
}
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
