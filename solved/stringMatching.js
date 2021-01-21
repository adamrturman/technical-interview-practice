//  https://leetcode.com/problems/string-matching-in-an-array/

//  Given an array of string words. Return all strings in words which is substring of another word in any order.
//
// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

// Example 1:
//
// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:
//
// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".

const stringMatching = function(words) {
    let regexContainer = [];
    let answer = [];
    //  create an array of regexes
    for (let i = 0; i < words.length; i++) {
        let pattern = words[i];
        let regex = new RegExp(pattern)
        regexContainer.push(regex)
    }
    //  compare the regexes to the words
    for (let i = 0; i < regexContainer.length; i++) {
        for (let j = 0; j < words.length; j++) {
            //  if the regex matches the word and they aren't the same word, add it to the answer
            if (regexContainer[i].test(words[j]) && words[j].match(regexContainer[i])[0].length !== words[j].length) {
                answer.push(words[j].match(regexContainer[i]))
            }
        }
    }
    //  since .match returns an array of single-element arrays, make a new array of just those elements
    const processedAnswers = answer.map((answers) => {
        return answers[0]
    });
    //  in case the same substring matches multiple words and would appear twice in the answer
    //  convert it to a set to remove duplicates, then convert it back to an array
    const removeDuplicates = new Set(processedAnswers);
    return Array(...removeDuplicates)
}

console.log(stringMatching(["leetcoder","leetcode","od","hamlet","am"]))
