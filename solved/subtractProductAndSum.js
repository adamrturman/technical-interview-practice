//  https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

//  Given an integer number n, return the difference between the product of its digits and the sum of its digits.

//  Example:
//
// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

const subtractProductAndSum = function(n) {
    const nString = n.toString();
    const nArray = nString.split('');
    const nums = nArray.map(num => parseInt(num));
    const product = nums.reduce((acc, current) => acc * current);
    const sum = nums.reduce((acc, current) => acc + current);
    return product - sum;
};

console.log(subtractProductAndSum(234)) // returns 15
console.log(subtractProductAndSum(4421))    // returns 21