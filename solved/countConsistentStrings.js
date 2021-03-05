//  https://leetcode.com/problems/count-the-number-of-consistent-strings/

//  You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
//
// Return the number of consistent strings in the array words.

// Example 1:
//
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.


//  Initial solution - use a counter plus a loop to remove all characters that match allow
const countConsistentStrings1 = function(allowed, words) {
    const regex = new RegExp(`[` + allowed + `]`, "gm")
    let count = 0;
    for (let i=0; i<words.length; i++) {
        if (words[i].replace(regex, '').length === 0) {
            count++;
        }
    }
    return count;
};


//  Refactor - create a new array of the words who match the condition and return that length
const countConsistentStrings2 = function(allowed, words) {
    const regex = new RegExp(`[` + allowed + `]`, "gm")

    const processedWords = words.filter(word => word.replace(regex, '').length === 0);
    return processedWords.length;
};

console.log(countConsistentStrings1("abc", ["a","b","c","ab","ac","bc","abc"]))  //  returns 7
console.log(countConsistentStrings2("abc", ["cc","acd","b","ba","bac","bad","ac","d"]))     //   returns 4