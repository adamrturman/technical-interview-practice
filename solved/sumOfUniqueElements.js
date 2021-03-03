//  https://leetcode.com/problems/sum-of-unique-elements/


//  You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
//
// Return the sum of all the unique elements of nums.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:
//
// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:
//
// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.


const sumOfUnique = function(nums) {
    let hash = {};
    let sumToProcess = nums.reduce((acc,curr) => acc + curr);
    //  loop through the input and make a hash
    //  the numbers that appear more than once will have a value of 1, single occurences will be 0
    for (let i=0; i<nums.length; i++) {
        if (hash.hasOwnProperty(nums[i])) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]] = 0;
        }
    }
    //  if a number appears more than once, subtract it from the sum
    for (let i=0; i<nums.length; i++) {
        if (hash[nums[i]] === 1) {
            sumToProcess -= nums[i];
        }
    }
    return sumToProcess;
};

console.log(sumOfUnique([2,4,6,4]))     //  returns 8
console.log(sumOfUnique([3,3,3,3]))     //  returns 0
console.log(sumOfUnique([1,2,3,4,5]))   //  returns 15