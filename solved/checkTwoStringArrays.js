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
// Example 2:
// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false

const arrayStringsAreEqual = function(word1, word2) {
    const combinedWord1 = word1.toString().replace(/,/gm, '' );
    const combinedWord2 = word2.toString().replace(/,/gm, '' );
    if (combinedWord1 === combinedWord2) {
        return true;
    }
    return false;
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])) //  returns true
console.log(arrayStringsAreEqual(["a", "cb"], ["a", "bc"])) //  returns false