//  https://leetcode.com/problems/shuffle-the-array/

//  Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
//
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
//
//
//
// Example 1:
//
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].


const shuffle = function(nums, n) {
    //  create array for answer
    let answer = [];
    //  create a variable to reference the indexes of the x's
    let xIndex = 0
    //  while the x index is less than the first y index (n) and n doesn't go beyond the length of the array
    while (xIndex < n && n <= nums.length -1) {
        //  add the x value
        answer.push(nums[xIndex])
        //  add the y value
        answer.push(nums[n])
        //  increment each value
        xIndex++
        n++
    }
    //  return the array
    return answer
};

console.log(shuffle([1,2,3,4,4,3,2,1], 4))  //  [1,4,2,3,3,2,4,1]