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

//  First solution
const restoreString1 = function (s, indices) {
    //  create an array for our answer
    let sArray = [];
    //  create a variable for the index we are looking for
    let target = 0;
    //  create a variable for the indices as we move
    let i = 0;
    //  as long as neither variable exceeds the necessary length
    while (i < s.length && target < s.length+1) {
        //  if they are the same length
        if (sArray.length === s.length) {
            //  join the array into a string an return it
            return sArray.join('');
            //  if we find the target
        } else if (indices[i] === target ) {
            //  assign that value to the answer array
            sArray[target] = s[i];
            //  increment the target and reset the index
            target++;
            i=0;
            //  if we didn't find the target, increment the index
        } else {
            i++;
        }
    }
};

//  Second solution
const restoreString2 = function (s, indices) {
    //  split the string into an array of letters
    const arrayOfLetters = s.split('');
    //  create an array for the answer
    let answerArray = [];
    //  loop through the indices array
    for (let i=0; i<indices.length; i++) {
        //  as the index increments, assign the elements to the answer array
        answerArray[indices[i]] = arrayOfLetters[i];
    }
}


console.log(restoreString1('codeleet', [4,5,6,7,0,2,1,3]))   //  returns 'leetcode'
console.log(restoreString2('codeleet', [4,5,6,7,0,2,1,3]))   //  returns 'leetcode'
