//  https://leetcode.com/problems/maximum-69-number/

//  Given a positive integer num consisting only of digits 6 and 9.
//
// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

//  Example 1:
//
// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.

const maximum69Number  = function(num) {
    const arrNum = Array.from(num.toString())
    for (let i=0; i< arrNum.length; i++) {
        let copy = [...arrNum]
        if (arrNum[i] == 6) {
            copy.splice(i, 1, '9')
            return copy.join('');
        }
    }
    return num;
};

console.log(maximum69Number(9669))  //  returns 9969
console.log(maximum69Number(9999))  //  returns 9999
console.log(maximum69Number(6996))  //  returns 9996


