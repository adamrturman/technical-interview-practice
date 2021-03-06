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

// const numIdenticalPairs = function(nums) {
//     nums.sort()
//     let finalAccumulator = nums.reduce((accumulator, currentValue, index, array) => {
//         if (currentValue == array[index+1]) {
//             accumulator++
//             return accumulator
//         } else {
//             return accumulator
//         }
//     })
//     return finalAccumulator
// };

const numIdenticalPairs = function(nums) {
    //  start a count of pairs at zero
    let pairs = 0;
    //  sort the digits
    nums.sort();
    //  create a pointer for subtraction
    let j = 1;
    //  loop through the nums
    for (let i=1; i<nums.length; i++) {
        //  if the element is equal to a previous element
        if (nums[i] === nums[i - j]) {
            //  add the value of the pointer to the number of pairs
            pairs += j;
            //  increment the pointer to check for additional pairs
            j++;
            //  if the elements aren't equal
        } else {
            //  reset the pointer to one
            j =1;
        }
    }
    return pairs
};


// console.log(numIdenticalPairs([1,2,3,1,1,3]))

//  Given an array of integers nums.
//  A pair (i,j) is called good if nums[i] == nums[j] and i < j.
//  Return the number of good pairs.
//  Example
//  Input: nums = [1,2,3,1,1,3]
//  Output: 4
//  Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

const numIdenticalPairs1 = function(nums) {
    let pairs = 0;
    for (let i = 0; i< nums.length; i++){
        for (let j = 1; j< nums.length; j++) {
            if (nums[i] === nums[j] && i<j) {
                pairs++;
            }
        }
    }
    return pairs;
};

const numIdenticalPairs2 = function(nums) {
    nums.sort();
    let pairs = 0;
    let j = 1;
    for (let i=1; i<nums.length; i++) {
        if (nums[i] === nums[i - j]) {
            pairs += j;
            j++;
        } else {
            j = 1;
        }
    }
    return pairs
};

// const numIdenticalPairs3 = function(nums) {
//     let count = {};
//     for (let i=0; i<nums.length; i++) {
//         if (!count.hasOwnProperty(nums[i])) {
//             count[nums[i]] = 1
//         } else {
//             count[nums[i]] += 1
//         }
//     }
//     console.log(count)
// }

function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

const numIdenticalPairs3 = function(nums) {
    let count = {};
    for (let i=0; i<nums.length; i++) {
        if (!count.hasOwnProperty(nums[i])) {
            count[nums[i]] = 1
        } else {
            count[nums[i]] += 1
        }
    }
    const numbersOfRepeats = Object.values(count);

    // const adjustedRepeats = numbersOfRepeats.map(function(num) {
    //     if (num === 1) {
    //         return 0
    //     } else {
    //         return num
    //     }
    // })

    const adjustedRepeats = numbersOfRepeats.filter(num => num > 1);

    let final = adjustedRepeats.reduce((accumulator, currentValue) => {
        return accumulator + (factorialize(currentValue)/(factorialize(currentValue - 2) * 2));
        }, 0);
        return final;

    // let final = adjustedRepeats.reduce((accumulator, currentValue) => {
    //     if (currentValue === 1) {
    //         return accumulator;
    //     } else {
    //         return accumulator + factorialize(currentValue)/(factorialize(currentValue - 2) * 2);
    //     }
    // }, 0);
    // return final;
}

// [7, 7, 7, 7]
// r = 2
// n = 4
//
// [
//     4,
//     3,
//     1
// ] => ?
//
// 1C2
// _
//
// 1!/(-1)! * 2!
//
// 4C2
// 4 * 3 * 2 * 1 / 2 * 1 * 2 * 1
// 24/ 4
// 6
//
// 2 1 - r!
// _ _
//
// 4 3 2 1 - 4!
// _ _ _ _
//
// 9 8 7 6
// _ _ _ _
//
// 9 * 8 * 7 * 6 = 9!/5!
//
// nPr -> n!/(n - r)!
// nCr -> n!/(n - r)! * r!
//
// 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 *1
// /
// 5 * 4 * 3 * 2 * 1

// console.log(numIdenticalPairs1([1,2,3,1,1,3]))  //  returns 4
// console.log(numIdenticalPairs2([1,2,3,1,1,3]))  //  returns 4
console.log(numIdenticalPairs3([1,2,3,1,1,3]))  //  