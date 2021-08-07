// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs: string[]) {
    let array1 = []
    let array2 = []
    let array3 = []

    for (let i=0; i < strs.length; i++){
        if(i===0) {
            let push = strs[0]
            array1.push(push)
        } else if(i===1) {
            let push = strs[1]
            array2.push(push)
        } else {
            let push = strs[2]
            array3.push(push)
        }
    }
    console.group("Arrays")
    console.log(array1[0])
    console.log(array2[0])
    console.log(array3[0])
    console.groupEnd()

    let text1 = array1[0]
    let text2 = array2[0]
    let text3 = array3[0]

    let array1Separate = text1.split("", text1.length)
    let array2Separate = text2.split("", text2.length)
    let array3Separate = text3.split("", text3.length)

    console.group("Words")
    console.log(array1Separate)
    console.log(array2Separate)
    console.log(array3Separate)
    console.groupEnd()

    let arraySolution: string[] = []

    for (let i=0; i<array1Separate.length; i++){
        if (array1Separate[i] == array2Separate[i] && array2Separate[i] == array3Separate[i]) {
            arraySolution.push(array1Separate[i])
        } else {
            i = array1Separate.length;
        }
    }
    console.log(arraySolution)
};

longestCommonPrefix(["Dariel", "Daniel", "Daviel"]);
longestCommonPrefix(['flower', 'flow', 'flight']);
