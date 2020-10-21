//  https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&page=31141&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen

//  An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:
//
// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
//
// Example
//
//
//
// The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.

function countingValleys(steps, path) {
    // Write your code here
    //  split the path into an array
    let pathArray = path.split('')
    //  create a counter for sealevel
    let seaLevel = 0
    //  create a counter for valleys
    let valley = 0

    //  loop through the array and add one for U, subtract from D
    for (let i= 0; i<pathArray.length; i++) {
        if (pathArray[i] === 'U') {
            seaLevel++
        } else if (pathArray[i] === 'D') {
            seaLevel--
        }
        //  a valley exists if we are reaching sea level from below
        if (seaLevel === 0 && pathArray[i] === 'U') {
            valley++
        }
    }
    return valley
}

countingValleys(8, 'DDUUUUDD')
