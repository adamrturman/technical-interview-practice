
//  https://leetcode.com/problems/two-sum/submissions/
const twoSum = function(nums, target) {
    //  create an empty object to store key/value pairs
    let myFirstHashTable= {}
    //  loop through the array
    for (i=0; i < nums.length; i++){
        //  set a property on the object
        //  the key will be the number itself, the value will be the the number's index
        myFirstHashTable[nums[i]] = i
    }
    //  loop through the array again to check each value
    for (i=0; i < nums.length; i++) {
        //  create a variable to store the difference of the the target and the current number
        // this is the number we are looking for
        let difference = target - nums[i]
        //  if we have a key in the hashtable that equals that difference
        //  and it isn't the value we are currently on
        if (myFirstHashTable.hasOwnProperty(difference) && myFirstHashTable[difference] !== i){
            //  return an array of the current index and the value of the key that matches the difference
            return [i, myFirstHashTable[difference]]
        }
    }
};

let result = twoSum([1,2,3,4,5,6,7], 13)
console.log(result)



