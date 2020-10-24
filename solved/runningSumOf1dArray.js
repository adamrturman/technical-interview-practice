//  https://leetcode.com/problems/running-sum-of-1d-array/

//  Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//
// Return the running sum of nums.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:
//
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:
//
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

//  Initial solution before refactoring
// const runningSum = function(nums) {
//     //  create container for our answer
//     let answer = [];
//     //  create a variable to store the sum as we move through the nums
//     let sum = 0;
//     //  loop through the nums
//     for (let i=0; i<nums.length; i++) {
//         //  add the new element to the sum
//         sum += nums[i];
//         //  push the sum into the answer array
//         answer.push(sum);
//     }
//     return answer;
// };

//  After refactoring to use map instead of loop
const runningSum = function(nums) {
    let sum = 0;
    const answer = nums.map(element => sum += element);
    return answer;
};