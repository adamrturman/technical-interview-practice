//  https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

//  Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
//
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
//
//
//
// Example 1:
//
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation:
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids.
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.


const kidsWithCandies = function(candies, extraCandies) {
    //  create an array for our answer
    let answer = []
    //  create a sorted array that does not modify the original array
    const sortedCandies = [...candies].sort((a, b) => a - b)
    const lastIndex = candies.length -1
    //  identify the max candy (last in the sorted candies array)
    const maxCandy = sortedCandies[lastIndex]
    //  loop through the original candies array
    for (let i=0; i<candies.length; i++) {
        //  if we add all extra to the current element and its greater than or equal to max
        if (candies[i] + extraCandies >= maxCandy) {
            //  add true to the answer array
            answer.push(true)
        } else {
            //  otherwise add false
            answer.push(false)
        }
    }
    //  return the array
    return answer
};

console.log(kidsWithCandies([2,3,5,1,3], 3))    //[true,true,true,false,true]
console.log(kidsWithCandies([12, 1, 12], 10))    //[true,false,true]