//  https://leetcode.com/problems/jewels-and-stones/

//You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
//
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
//
// Example 1:
//
// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:
//
// Input: J = "z", S = "ZZ"
// Output: 0
// Note:
//
// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

//  This is a brute force solution O (n^2) - Need to refactor to use a set

// const numJewelsInStones = function(J, S) {
//     //  start a count
//     let count = 0;
//     //  split J into array of characters, those are the jewels we are looking for
//     const arrayOfJewels= J.split('');
//     //  split S into array of characters
//     const arrayOfStones= S.split('');
//     //  loop through both arrays
//     for (let i=0; i<arrayOfJewels.length; i++) {
//         for (let k=0; k<arrayOfStones.length; k++) {
//             // if we find an element in arrayOfStones that is also in arrayOfJewels
//             if (arrayOfJewels[i] === arrayOfStones[k]) {
//                 // increment the count
//                 count++;
//             }
//         }
//     }
//     return count;
// };

//  Refactored to use a set

const numJewelsInStones = function (J, S) {
    let count = 0;
    const stoneArray = S.split('');
    const jewelSet = new Set(J);
    //  for every element in the stoneArray that is also in the jewelSet, increment the count
    stoneArray.forEach(element => {
        if (jewelSet.has(element)) {
            count++;
        }
    })
    return count
};

console.log(numJewelsInStones("aA", "aAAbbbb"))