//  https://leetcode.com/problems/goal-parser-interpretation/

//  You own a Goal Parser that can interpret a string command.
//  The command consists of an alphabet of "G", "()" and/or "(al)" in some order.
//  The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al".
//  The interpreted strings are then concatenated in the original order.

//  Example 1:
// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

// Example 2:
// Input: command = "G()()()()(al)"
// Output: "Gooooal"

const interpret = function(command) {
    return command.replace(/\(\)/gm, 'o').replace(/\(al\)/gm, 'al');
};

console.log(interpret("G()(al)"))   //  returns "Goal"
console.log(interpret("G()()()()(al)"))     //  returns "Gooooal"
