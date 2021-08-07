"use strict";
// Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr) {
    let arrayName = arr.map(function (object) {
        return `<h1>${object.name}</h1><h2>${object.age}<h2>`;
    });
    console.log(arrayName);
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
