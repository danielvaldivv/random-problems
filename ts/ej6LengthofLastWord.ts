// Given a string s consists of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s:string) {
    let words = s.split(" ")
    console.log(words[words.length - 1].length)
};
lengthOfLastWord ('Mi name is Daniel')