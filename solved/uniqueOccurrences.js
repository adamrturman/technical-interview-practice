//  https://leetcode.com/problems/unique-number-of-occurrences/

//  Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
// Example 1:
//
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:
//
// Input: arr = [1,2]
// Output: false

const uniqueOccurrences = function(arr) {
    //  build a hash to store elements and frequency of occurrences
    let hash = {};
    for (let i=0; i<arr.length; i++) {
        if (!hash.hasOwnProperty(arr[i])) {
            hash[arr[i]] = 1;
        } else {
            hash[arr[i]]++;
        }
    }
    //  grab and sort the frequency of occurrences
    const occurrences = Object.values(hash);
    const sortedOccurrences = occurrences.sort((a,b) => a-b)
    //  loop through that array and return false if any two consecutive elements match
    for (let i=0; i<sortedOccurrences.length; i++){
        if (sortedOccurrences[i] === sortedOccurrences[i+1]){
            return false;
        }
    }
    //  if we make it through and no two are equal, return true
    return true;
};

console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))   //  returns true
console.log(uniqueOccurrences([1,3,5,5,32]))    //  returns false