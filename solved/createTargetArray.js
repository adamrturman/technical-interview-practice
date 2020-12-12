//  https://leetcode.com/problems/create-target-array-in-the-given-order/

//  Given two arrays of integers nums and index. Your task is to create target array under the following rules:
//
// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.
// It is guaranteed that the insertion operations will be valid.

// Example
// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]

//  First solution using loop
const createTargetArray1 = function(nums, index) {
    let target = [];
    for (let i= 0; i< nums.length; i++) {
        target.splice(index[i], 0, nums[i]);
    }
    return target;
};
//  Reduce before refactor
const createTargetArray2 = function(nums, index) {
    const answer = nums.reduce((acc, curr, i)=> {
        acc.splice(index[i], 0, nums[i]);
        return acc;
    }, new Array())
    return answer;
}

//  Reduce after refactor
const createTargetArray3 = function(nums, index) {
    return nums.reduce((acc, curr, i)=> {
        acc.splice(index[i], 0, nums[i]);
        return acc;
    }, new Array());
}


console.log(createTargetArray1([0,1,2,3,4], [0,1,2,2,1]))    //  returns [0,4,1,3,2]
console.log(createTargetArray2([1,2,3,4,0], [0,1,2,3,0]))    //  returns [0,1,2,3,4]
console.log(createTargetArray3([1,2,3,4,0], [0,1,2,3,0]))    //  returns [0,1,2,3,4]