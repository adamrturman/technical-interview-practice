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
        //  variable to represent each key in the hashtable
        let value = charHash[s[i]]
        // if the value at that index has a length of 1, return the first index
        if (value.length === 1) {
            return value[0]
        }
    }
    //  if we don't find a single and exit the loop, return -1
    return -1
};

console.log(firstUniqChar("adam"))  //  returns 1
console.log(firstUniqChar("leetcode"))  //  returns 0
console.log(firstUniqChar("loveleetcode"))  //  returns 2
console.log(firstUniqChar("aabbcc"))    //  returns -1