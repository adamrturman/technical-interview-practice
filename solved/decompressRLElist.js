//  https://leetcode.com/problems/decompress-run-length-encoded-list/

//  We are given a list nums of integers representing a list compressed with run-length encoding.
// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).
// For each such pair, there are freq elements with value val concatenated in a sublist.
// Concatenate all the sublists from left to right to generate the decompressed list.
// Return the decompressed list.

// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].


const decompressRLElist = function(nums) {
    //  create a container for the answer
    let answer = [];
    //  loop through the nums
    for (let i =0; i<nums.length; i++) {
        //  if the index is even
        if (i % 2 === 0) {
            // add the contents of a new array with a length of nums[i]
            // which is filled with content of nums[i]+1
            answer.push(...new Array(nums[i]).fill(nums[i+1]))
        }
    }
    return answer;
    //  multiple the odd numbered indices by the previous index
};

console.log(decompressRLElist([1,2,3,4]))   //  returns [2,4,4,4]
console.log(decompressRLElist([1,1,2,3]))   //  returns [1,3,3]