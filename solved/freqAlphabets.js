//  https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

//  Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:
//
// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.
//
// It's guaranteed that a unique mapping will always exist.

const freqAlphabets = function(s) {
    //  variable to return as the answer
    let string = "";
    //  loop through the input
    for (let i=0; i<s.length; i++) {
        //  variable for cases 10#-26#
        let secondCondition = s[i] + s[i+1]
        //  if we encounter this condition
        if (s[i+2] === "#") {
            //  add the two digit number's value character to the string
            string = string.concat(String.fromCharCode(parseInt(secondCondition) + 64))
            //  increment i past the "#" to the next number to check and process
            i+=2;
        } else {
            //  otherwise, add the single digit number's value to the string
            string = string.concat(String.fromCharCode(parseInt(s[i]) + 64))
        }
    }

    //  return our string in lowercase letters
    return string.toLowerCase();
};

console.log(freqAlphabets("10#11#12"))  //  returns 'jkab'
console.log(freqAlphabets("1326#"))  //  returns 'acz'
console.log(freqAlphabets("25#"))  //  returns 'y'
