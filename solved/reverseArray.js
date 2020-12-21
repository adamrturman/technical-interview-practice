//  https://www.hackerrank.com/challenges/arrays-ds/problem

//  Reverse an array of integers.

//  Example
// [1,2,3,4]
// Return [4,3,2,1].

function reverseArray(a) {
    //  define a container for the answer
    let answer = [];
    //  loop through the input from the end to start
    for (let i=a.length-1; i>=0; i--) {
        //  push the element into the answer container
        answer.push(a[i])
    }
    return answer
}

console.log(reverseArray([1,2,3,4]))