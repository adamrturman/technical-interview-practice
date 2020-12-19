//  https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
//  Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
//  A subarray is a contiguous subsequence of the array.
//  Return the sum of all odd-length subarrays of arr.

//  Example:
// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

const sumOddLengthSubarrays = function(arr) {
    //  declare variables
    let oddLengthCount = 1;
    const container = [];
    const last = arr.length-1
    //  while checking for odd lengths less than or equal to the length of the input array
    while (oddLengthCount <= arr.length) {
        //  loop through the input
        for (let i=0; i<arr.length; i++) {
            //  as long as our index + current amount we are checking is inclusively within the length of the input
            if (i+oddLengthCount <= last+1)
                //  slice from that index to that index plus that oddCount and push the result into the container
            container.push(...arr.slice(i, i + oddLengthCount))
        }
        //  check the next odd number
        oddLengthCount +=2;
    }
    //  once we've checked all oddLengths that are possible with the input length, return the sum of the result
    return container.reduce((acc, curr) => acc +curr)
}

console.log(sumOddLengthSubarrays([1,4,2,5,3])) //  returns 58
console.log(sumOddLengthSubarrays([1,2]))   //  returns 3
console.log(sumOddLengthSubarrays([10,11,12]))   //  returns 66
