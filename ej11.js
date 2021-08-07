// Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr){
    let whoGoMatrix = arr.map( (object) =>
    object.age > 20 ?`${object.name} can go to the Matrix!` : `${object.name} is under age!!`)
    console.log(whoGoMatrix);
}

console.log(makeStrings([
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
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]