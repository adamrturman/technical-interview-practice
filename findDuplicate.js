
// function firstDuplicate(a) {
//     // using an object/hash table
//     let dict = {}
//     for(let i = 0; i < a.length; i++) {
//         if(dict[a[i]]) {
//             return a[i]
//         } else if (!dict[a[i]]) {
//             dict[a[i]] = 1
//         }
//     }
//     return -1
// }



// const findFirstDuplicate = function(nums) {
//     return nums.reduce(function (accumulator, currentValue) {
//         if (accumulator.numbersSeenAlready.has(currentValue)) {
//             accumulator.processedNums.push(currentValue);
//         }
//         accumulator.numbersSeenAlready.add(currentValue);
//         return accumulator;
//     }, {
//         numbersSeenAlready: new Set(),
//         processedNums: []
//     }).processedNums[0];
// };

const findFirstDuplicate = function(nums) {
    const answer = nums.reduce(function (accumulator, currentValue) {
        if (accumulator.numbersSeenAlready.has(currentValue)) {
            accumulator.processedNums.push(currentValue);
        }
        accumulator.numbersSeenAlready.add(currentValue);
        return accumulator;
    }, {
        numbersSeenAlready: new Set(),
        processedNums: []
    });
    if (answer.processedNums.length === 0) {
        return false;
    } else {
        return answer.processedNums[0];
    }
};
console.log(findFirstDuplicate([2,1,3,5,3,2])) //   returns 3
console.log(findFirstDuplicate([2,1,3,5,3,2])) //   returns 3
console.log(findFirstDuplicate([1,2,3,4,5]))    //  returns false

// const findFirstDuplicate = function(nums) {
//     let finalAccumulator = nums.reduce(function (accumulator, currentValue) {
//         if (accumulator.numbersSeenAlready.has(currentValue)) {
//             accumulator.processedNums.push(currentValue)
//         } else {
//             accumulator.numbersSeenAlready.add(currentValue)
//         }
//         return accumulator
//     }, {
//         numbersSeenAlready: new Set(),
//         processedNums: []
//     });
//
//     return finalAccumulator.processedNums[0]
// };

console.log(findFirstDuplicate([2,1,3,5,3,2]))