//  https://leetcode.com/problems/single-number/

//  1.
const singleNumber = function(nums) {
    //  create an empty object to store key/value pairs
    let hashTable = {}
    // loop through the array of nums
    for (let i = 0; i < nums.length; i++) {
        //  if that key already exists,
        if (hashTable.hasOwnProperty(nums[i])) {
            // increase its value (the count) by one
            hashTable[nums[i]]++
            // otherwise
        } else {
            // add the value of nums at the index as the key and the value as 1 to act as a count
            hashTable[nums[i]] = 1
        }
    }
    //  after the loop has completed, create a helper function
    //  this function will accept one parameter, our object)
    //  This was my first way before the single line refactor
    // const findKeyEqualToOne = function(obj) {
    //     //  use the keys method to return an array of the keys
    //     //  pass that array to the find method to search for a key whose value matches 1
    //     return Object.keys(obj).find(key => obj[key] === 1)
    // }
    const findKeyEqualToOne = obj => Object.keys(obj).find(key => obj[key] === 1)
    return findKeyEqualToOne(hashTable)
};

console.log(singleNumber([4,1,2,1,2,4,5]))

// 2. Version above with hardcoded values
// this part works
// var makeHashTable = function(nums) {
//     //  create an empty object to store key/value pairs
//     let hashTable = {}
//     // loop through the array of nums
//     for (i = 0; i < nums.length; i++) {
//         //  if that key already exists,
//         if (hashTable.hasOwnProperty(nums[i])) {
//             // increase its value (the count) by one
//             hashTable[nums[i]]++
//             // otherwise
//         } else {
//             // make a new key with a count of 1
//             hashTable[nums[i]] = 1
//         }
//     }
//     //  return the result after the loop is done
//     return hashTable
// };
// //  this part is cheating!
// const myVar = makeHashTable([22,22,2,33,33])
// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
// }
// //  pass the helper our hashTable object and the value 1
// getKeyByValue(myVar, 1)
//
//
// // 3. Tried to use reduce
// // doesn't return single value, returns length of array!
// const containsSingle = function(nums) {
//     return nums.reduce(function (accumulator, currentValue){
//         if (accumulator.currentValue) {
//             accumulator.currentValue++
//         } else {
//             accumulator.currentValue = 1
//         }
//         return accumulator
//     }, {})
//     function getKeyByValue(object, value) {
//         return Object.keys(object).find(key => object[key] === value);
//     }
//     getKeyByValue(accumulator, 1)
// }