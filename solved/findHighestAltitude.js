// https://leetcode.com/problems/find-the-highest-altitude/

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1
// for all (0 <= i < n). Return the highest altitude of a point.

// Example 1:
//
// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
// Example 2:
//
// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

const largestAltitude1 = function(gain) {
    //  keep track of the altitudes in an array starting at zero
    let altitudes = [0];
    //  variable for the running altitude, also begins at zero
    let newAltitude = 0;
    //  iterate through all the changes in the gain array
    for (let change in gain) {
        //  redefine the running altitude and push it into the answer array
        newAltitude += gain[change];
        altitudes.push(newAltitude);
    }
    //  return the maximum value from that array
    return Math.max(...altitudes);
};

const largestAltitude2 = function(gain) {
    //  initial altitude
    let currentAltitude = 0;
    //  max altitude
    let maximumAltitude = 0;
    gain.forEach(change => {
        currentAltitude += change;
        //  if the currentAltitude is greater than the previous value for the max
        //  redefine that value, otherwise, it will remain
        maximumAltitude = Math.max(currentAltitude, maximumAltitude)
    })
    return maximumAltitude;
};

console.log(largestAltitude1([-4,-3,-2,-1,4,3,2]))  //  returns 0
console.log(largestAltitude2([-5,1,5,0,-7]))  //  returns 1



