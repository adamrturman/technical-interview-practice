//  https://leetcode.com/problems/flipping-an-image/

//  Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
//
// To flip an image horizontally means that each row of the image is reversed.
//
// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
//
// For example, inverting [0,1,1] results in [1,0,0].
//
// Example
//
// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

//  Initial solution - brute force with two nested loops

const flipAndInvertImage1 = function(image) {
    let container = [];
    for (let i = 0; i < image.length; i++) {
        //  reverse the subarrays
        container.push(image[i].reverse())
    }
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            //  swap the 1's and 0's
            if (image[i][j] === 1) {
                image[i][j] = 0;
            } else if (image[i][j] === 0) {
                image[i][j] = 1;
            }
        }
    }
    return container;
};

//  Refactored solution - use map method to reverse the subarrays
//  Then, map each subarray and swap 1's and 0's

const flipAndInvertImage2 = function(image) {
    const reversedSubarrays = image.map(subarray => subarray.reverse());
    return reversedSubarrays.map(subarray => subarray.map(number => number === 0 ? 1 : 0))
};


console.log(flipAndInvertImage1([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])) //  returns [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
console.log(flipAndInvertImage2([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])) //  returns [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]