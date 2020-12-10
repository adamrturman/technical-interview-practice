//  https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

//  Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
// A string is represented by an array if the array elements concatenated in order forms the string.

// Example 1:
// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

const arrayStringsAreEqual1 = function(word1, word2) {
    const combinedWord1 = word1.toString().replace(/,/gm, '' );
    const combinedWord2 = word2.toString().replace(/,/gm, '' );
    if (combinedWord1 === combinedWord2) {
        return true;
    }
    return false;
};

const arrayStringsAreEqual2 = function(word1, word2) {
    function smush(part1, part2) {
        return part1 + part2;
    }
    return word1.reduce(smush) === word2.reduce(smush)
};

const arrayStringsAreEqual3 = function(word1, word2) {
    function combine (...words) {
        return words.toString().replace(/,/gm, '')
    }
    return combine(word1) === combine(word2)
};

const arrayStringsAreEqual4 = function(word1, word2) {
    return word1.join('') === word2.join('')
}

console.log(arrayStringsAreEqual1(["ab", "c"], ["a", "bc"])) //  returns true
console.log(arrayStringsAreEqual2(["a", "cb"], ["a", "bc"])) //  returns false
console.log(arrayStringsAreEqual3(["ab", "c"], ["a", "bc"])) //  returns true
console.log(arrayStringsAreEqual3(["abc", "d", "defg"],["abcddefg"]))   //  returns true
