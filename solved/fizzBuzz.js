//  https://leetcode.com/problems/fizz-buzz/

// Write a program that outputs the string representation of numbers from 1 to n.
//
//     But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
//
// Example:
//
//     n = 15,
//
//         Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

const fizzBuzz = function(n) {
    //  create the array to return as the answer
    let answer = []
    //  loop through numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        //  If divisible by 15 push FizzBuzz
        if (i % 15 === 0) {
            answer.push("FizzBuzz")
            //  If divisible by 3 push Fizz
        } else  if (i % 3 === 0) {
            answer.push("Fizz")
            //  If divisible by 5 push Buzz
        } else  if (i % 5 === 0) {
            answer.push("Buzz")
            //  Otherwise push the number (converted to a string)
        } else {
            answer.push(i.toString())
        }
    }
    return answer
};