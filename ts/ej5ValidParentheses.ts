// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s: string) {
    let arraySeparate = s.split('', s.length);
    console.log(arraySeparate);

    for (let j = 0; j < arraySeparate.length - 1 ; j++) {
        if (arraySeparate[j] == '[' && arraySeparate[j+1]==']') {
            arraySeparate.splice(j,2)
            j=-1
        } else if (arraySeparate[j] == '{' && arraySeparate[j+1]=='}') {
            arraySeparate.splice(j,2)
            j=-1
        } else if (arraySeparate[j] == '(' && arraySeparate[j+1]==')') {
            arraySeparate.splice(j,2)
            j=-1
        }
    }

    if (arraySeparate.length == 0){
        console.log('true')
    } else {
        console.log('false')
        console.log(arraySeparate);
    }
};

isValid('[]()(()()')