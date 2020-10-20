//  https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
    let finalAccumulator = nums.reduce(function (accumulator, currentValue) {
        if (accumulator.numbersSeenAlready.has(currentValue)) {
            accumulator.doesContainDuplicate = true
        } else {
            accumulator.numbersSeenAlready.add(currentValue)
        }
        return accumulator
    }, {
        numbersSeenAlready: new Set(),
        doesContainDuplicate: false
    })
    console.log(finalAccumulator)
    return finalAccumulator.doesContainDuplicate
};


const result = containsDuplicate([1, 2, 2, 3, 4]);
console.log(result);