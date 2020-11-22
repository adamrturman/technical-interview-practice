//  https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

//  Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
//
// Return the answer in an array.

// Example 1:
//
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).



const smallerNumbersThanCurrent = function(nums) {
    let container =[];
    let firstPointer = 0;
    let secondPointer = 1;
    let count = 0;
    while (firstPointer < nums.length) {
        //  if the first value is greater than the second and within the length
        if (nums[firstPointer] > nums[secondPointer] && secondPointer< nums.length){
            //  increment the count and keep check the next element
            count++;
            secondPointer++;
            //  when we reach the end of the array
        } else if (secondPointer === nums.length) {
            //  push that count into the answer
            container.push(count);
            //  check the next starting element and reset the count & second pointer
            firstPointer++;
            secondPointer = 0;
            count = 0;
            //  if we are still within the length of the array
        } else {
            //  check the next element
            secondPointer++;
        }
    }
    //  when we've checked every element in the array against all others
    return container;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))