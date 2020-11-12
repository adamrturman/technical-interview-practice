//  https://leetcode.com/problems/shuffle-string/

//  Given a string s and an integer array indices of the same length.
//
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
//
// Return the shuffled string

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

//  Input: s = "art", indices = [1,0,2]
// Output: "rat"


const restoreString = function (s, indices) {
    let sArray = [];
    let target = 0;
    let i = 0;
    while (i < s.length && target < s.length+1) {
        if (sArray.length === s.length) {
            return sArray.join('');
        } else if (indices[i] === target ) {
            sArray[target] = s[i];
            target++;
            i=0;
        } else {
            i++;
        }
    }
};


console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3]))   //  returns 'leetcode'
