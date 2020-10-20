//  https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

//  First Unique Character - set up a hash table to store the characters and an array of the indexes at which they appear
//  Create an array of all the values that only appear twice and return the lowest value, since that one appears first

//  this will make a hash table that stores the characters and the indexes of their appearances
// var firstUniqChar = function(s) {
//     let charHash = {}
//     for (i=0; i<s.length; i++) {
//         if (charHash.hasOwnProperty(s[i])) {
//             charHash[s[i]].push(i)
//         } else {
//             charHash[s[i]]=[i]
//         }
//     }
//     return charHash
//     //  return the
// };
//
// firstUniqChar("sssstefe")   //  this returns the object I want, but now I need to search it


const firstUniqChar = function(s) {
    let charHash = {}
    for (let i=0; i<s.length; i++) {
        if (charHash.hasOwnProperty(s[i])) {
            charHash[s[i]].push(i)
        } else {
            charHash[s[i]]=[i]
        }
    }
    //  pass through the string again
    for (let i=0; i<s.length; i++) {
        // create an empty array to store indexes of singles
        let arrayOfSingles = []
        // if the value at that index has a length of 1
        if (charHash.s[i].length === 1) {
            //  add that index to the singles array
            arrayOfSingles.push(i)
        }
        //  sort the array of singles by value
        arrayOfSingles.sort()
        //  return the first, which will be the lowest value, which would be the first single in case multiple single letters are present
        return arrayOfSingles[0]
    }
    //  if the loop exits without returning it doesn't exist
    return -1
};

console.log(firstUniqChar("adam"))