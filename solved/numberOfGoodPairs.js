//  https://leetcode.com/problems/number-of-good-pairs/

//  Given an array of integers nums.
//
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
//
// Return the number of good pairs.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:
//
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:
//
// Input: nums = [1,2,3]
// Output: 0

// const numIdenticalPairs = function(nums) {
//     let pairs = 0;
//     for (let i = 0; i< nums.length; i++){
//         for (let j = 1; j< nums.length; j++) {
//             if (nums[i] == nums[j] && i <j) {
//                 pairs++;
//             }
//         }
//     }
//     return pairs;
// };
//
// console.log(numIdenticalPairs([1,2,3,1,1,3]))

// const numIdenticalPairs = function(nums) {
//     let pairs = 0;
//     const numSet = new Set (nums)
//     console.log(numSet)
//     nums.forEach((element) => {
//         let newPair = element * (element -1) /2;
//         pairs = pairs + newPair;
//     })
//     return pairs;
// };

const numIdenticalPairs = function(nums) {
    let pairs = 0;
    nums.sort();
    nums.reduce((accumulator, currentValue, index, array) => {
        if (currentValue === array[index+1]) {

        }
    }, nums[0])
    return pairs
}


console.log(numIdenticalPairs([1,1,1,1]))