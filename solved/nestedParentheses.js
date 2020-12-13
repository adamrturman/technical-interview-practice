// const maxDepth = function(s) {
//     let res = 0;
//     let cur = 0;
//     [...s].forEach(char => {
//         if (char === "(") {
//             cur++;
//             res = Math.max(res, cur);
//         } else if (char === ")") cur--;
//     });
//     return res;
// };

// 1. First solution using a loop
const maxDepth1 = function(s) {
    //  variables to store final and current value
    let answer = 0;
    let current = 0;
    //  loop through the string
    for (let i=0; i<s.length; i++) {
        //  when we get to an opening parenthesis
        if (s[i]=== '(') {
            //  increment the current value
            current++;
            //  if the current value is greater than the answer, reassign it
            answer = Math.max(answer, current);
        //  when we get to a closing parenthesis
        } else if (s[i] === ')') {
            //  decrement that value (which 'closes the pair')
            //  so the next time we reach an opening, we don't keep adding on to the current count
            current--;
        }
    }
    return answer;
}

//  Second solution refactored to use forEach method

const maxDepth2 = function(s) {
    let answer = 0;
    let current = 0;
    new Array(...s).forEach(element => {
        if (element === '(') {
            current++;
            answer = Math.max(answer, current);
        } else if (element === ')') {
            current--;
        }
    })
    return answer;
}
console.log(maxDepth1("(1+(2*3)+((8)/4))+1"))  //  returns 3
console.log(maxDepth2("(1)+((2))+(((3)))"))  //  returns 3
console.log(maxDepth2("1+(2*3)/(2-1)"))  //  returns 1