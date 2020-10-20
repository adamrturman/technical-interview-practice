// https://leetcode.com/problems/valid-palindrome/submissions/

var isPalindrome = function(s) {
    const cleanedLowerCased = s.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return cleanedLowerCased === cleanedLowerCased.split('').reverse().join('');
};

var isPalindrome = function(s) {
    //  replace all non-letters/numbers with an empty string
    const letters = s.replace(/[^a-zA-Z0-9]/g, '')
    //   split the string into an array and then lowercase each letter
    const processedLetters = letters.split('').map(letter => letter.toLowerCase())
    //  create a reversedProcessedLetters container array to store values
    let reversedProcessedLetters = []
    //  loop through the processedLetters from the end
    for (let i = processedLetters.length-1; i>= 0; i--) {
        //  add them to the container array
        reversedProcessedLetters.push(processedLetters[i])
    }
    //  return true if the each element in the two arrays are equal
    return processedLetters.every((letter, index) => letter === reversedProcessedLetters[index]);
};

const isAPalindrome = isPalindrome('Race car');
console.log(isAPalindrome);
//  I'm returning true for any string. I think it is because I'm not successfully adding anything to the container array.
//  and the reverse of an empty array will always be the same
//
//
// Array.prototype.every = function (callback) {
//     for (let i = 0; i < this.array.length; i++) {
//         if(!callback(this.array[i], i)) {
//             return false;
//         }
//     }
//
//     return true;
// }
