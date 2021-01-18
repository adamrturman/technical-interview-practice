//  https://leetcode.com/problems/rotate-string/

//  We are given two strings, A and B.
//
// A shift on A consists of taking string A and moving the leftmost character to the rightmost position.
//  Return True if and only if A can become B after some number of shifts on A.
// Example 1:
// Input: A = 'abcde', B = 'cdeab'
// Output: true
// Example 2:
// Input: A = 'abcde', B = 'abced'
// Output: false

const rotateString = function(A, B) {
    //  edge case if both strings are empty
    if (A.length === 0 && B.length === 0){
        return true;
    }
    const last = A.length -1
    let copy = A.slice()
    for (let i=0; i<A.length; i++){
        //  grab the first element
        let first = copy[0];
        //  grab the second up through the last
        let portion = copy.slice(1, last+1)
        //  redefine the copy
        copy = portion.concat(first)
        //  check for equivalency
        if (copy === B) {
            return true;
        }
    }
    //  after we've checked each rotation once
    return false;
};

console.log(rotateString('abcde', 'cdeab' ))    // returns true
console.log(rotateString('abcde', 'abced' ))    // returns false
console.log(rotateString('', '' ))              // returns true

