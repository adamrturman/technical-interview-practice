//  Implement a function that returns an array of the number of valid words in the corresponding lock
//  The first letter in the keypad must be in the resulting word
//  If a keypad is 'XAEBKSY', the letter 'X' must appear in the word
//  All letters are capitalized
//  Words are at least 5 letters long with no maximum length
//  Should scale up to solving 10,000 puzzles

//  Example Input:
//  wordlist: ['APPLE', 'PLEAS', 'PLEASE']
//  keypads: ['AELWXYZ', 'AELPXYZ', AELPSXY', 'SAELPRT', XAEBKSY']

//  Expected output: [0, 1, 3, 2, 0]

//  Explanation:
//  No words in wordlist can be made from the letters in keypad[0]
//  One word in wordlist can be made from the letters in keypad[1] - APPLE
//  All three words in wordlist can be made from the letters in keypad[2]
//  Two words in wordlist can be made from the letters in keypad[3] - PLEAS and PLEASE
//  No words in wordlist can be made from the letters in keypad[4] - since none contain the letter X


function numKeypadSolutions(wordlist, keypads) {
    let wordSetArray= [];

    function makeSet(word) {
        let set = new Set;
        for (let i =0; i<word.length; i++) {
            set.add(word[i])
        }
        return set;
    }

    for (let index in wordlist) {
        wordSetArray.push(makeSet(wordlist[index]))
    }
    //  use these sets as regexes to test against the elements in the keypad array
    //  if they match the same length as the input, they are valid

    for (let index in wordSetArray) {
        for (let element in keypads) {
            if (keypads[element].match(/wordSetArray[index]/gm).length === wordSetArray[index].length){
                return true;
            }
        }
    }
};