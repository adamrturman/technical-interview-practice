// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

//  In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
//
// Return the element repeated N times.
//
//
//
// Example 1:
// Input: [1,2,3,3]
// Output: 3

// Example 2:
// Input: [2,1,2,5,3,2]
// Output: 2

//  Initial solution
const repeatedNTimes1 = function(A) {
    //  build a has to store the elements and their number of occurrences
    let hash ={};
    for (let i=0; i< A.length; i++) {
        if (hash.hasOwnProperty(A[i])){
            hash[A[i]]++;
        } else {
            hash[A[i]] = 1;
        }
    }
    //  find the greatest number of occurrences
    let max = 1;
    for (let i=0; i< A.length; i++) {
        if (hash[A[i]] > max){
            max = hash[A[i]]
        }
    }
    //  return the key whose value matches that max number
    return Object.keys(hash).find(key => hash[key] === max);
};

//  Refactored

const repeatedNTimes2 = function(A) {
    //  The answer is any element that occurs more than once!
    let hash ={};
    for (let i=0; i< A.length; i++) {
        if (hash.hasOwnProperty(A[i])){
            return A[i];
        } else {
            hash[A[i]] = 1;
        }
    }
}

console.log(repeatedNTimes1([5,1,5,2,5,3,5,4]))  //  returns 5
console.log((repeatedNTimes2([4,1,4,5,3,4]))) // returns 2