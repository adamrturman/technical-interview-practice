//  https://leetcode.com/problems/array-partition-i/

//  Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

// Example 1:
//
// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.
// Example 2:
//
// Input: nums = [6,2,6,5,1,2]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

// const arrayPairSum = function(nums) {
//     let container = [];
//     let answer = [];
//     const sortedNums = nums.sort((a,b) => a-b);
//     for (let i=0; i<sortedNums.length -1; i+=2) {
//         container.push(Array(sortedNums[i], sortedNums[i+1]))
//     }
//     for (let i=0; i<container.length; i++) {
//         answer.push(container[i][0])
//     }
//     return answer.reduce((acc,curr) => acc + curr);
// };

//  First solution
const arrayPairSum1 = function(nums) {
    let container = [];
    let answer = [];
    const sortedNums = nums.sort((a,b) => a-b);
    for (let i=0; i<sortedNums.length -1; i+=2) {
        container.push(Array(sortedNums[i], sortedNums[i+1]))
    }
    for (let i=0; i<container.length; i++) {
        answer.push(container[i][0])
    }
    return answer.reduce((acc,curr) => acc + curr);
};

//  Second solution - refactored second loop into reduce
const arrayPairSum2 = function(nums) {
    let container = [];
    const sortedNums = nums.sort((a,b) => a-b);
    for (let i=0; i<sortedNums.length -1; i+=2) {
        container.push(Array(sortedNums[i], sortedNums[i+1]))
    }
    const answer = container.reduce((acc,curr) => {
        return acc.concat(curr[0])
    }, [])
    return answer.reduce((acc,curr) => acc + curr);
};

console.log(arrayPairSum1([1,4,3,2]))    //  returns 4
console.log(arrayPairSum2([6,2,6,5,1,2]))    //  returns 9
