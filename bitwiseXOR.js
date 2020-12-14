//  https://leetcode.com/problems/xor-operation-in-an-array/

//  Given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
// Return the bitwise XOR of all elements of nums.

//  Example
// Input: n = 5, start = 0
// Output: 8
// Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
// Where "^" corresponds to bitwise XOR operator.

const xorOperation = function(n, start) {
    //  nums has n-number of empty slots
    const nums = new Array(n);
    for (let i=0; i<nums.length; i++){
        //  at i-index, remove one element, and replace it with value defined in the prompt
        nums.splice(i, 1 , (start+(2*i)));
    }
    return nums.reduce((acc, curr) =>  acc^curr);
};

const xorOperation2 = (n, start) => {
    //  nums has n-number of undefined slots
    const nums = [... new Array(n)];
    const mappedNums = nums.map((value, index)=> start + 2 * index);
    return mappedNums.reduce((acc, num)=>acc ^ num);
}

console.log(xorOperation(5, 0)) // returns 8
console.log(xorOperation2(4, 3)) // returns 8
console.log(xorOperation2(1, 7)) // returns 7