"use strict";
var addTwoNumbers = function (l1, l2) {
    let textl1 = l1.toString();
    let textl2 = l2.toString();
    let arrayl1 = textl1.split("", textl1.length);
    let arrayl2 = textl2.split("", textl2.length);
    let arraySuma = [];
    for (let i = 0; i < textl1.length; i++) {
        let strArray1 = arrayl1[i];
        let strArray2 = arrayl2[i];
        let numArray1 = parseInt(strArray1);
        let numArray2 = parseInt(strArray2);
        let sumaArray = numArray1 + numArray2;
        arraySuma.push(sumaArray);
        console.log(sumaArray);
    }
    let arrayReverse = arraySuma.reverse();
    console.log(arrayReverse);
};
addTwoNumbers(234, 455);
