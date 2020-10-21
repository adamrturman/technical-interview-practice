//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
// Examples:
//
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']


//  This code works in node, but not in test cases on codewars...
//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str) {
    //  split the str into an array of letters
    let strArr = str.split('')
    //  variables to store new strings and container array
    let newStr
    let newArr = []
    //  edge case - if the array is empty, return an empty array
    if (strArr.length < 1) {
        return []
    }
    //  if it is even
    else if (strArr.length % 2 === 0) {
        //   then loop through the characters (incrementing by two)
        for (let i = 0; i < strArr.length; i = i + 2) {
            // join the element to the next
            newStr = strArr[i].concat(strArr[i + 1])
            //  add each new string to the container array
            newArr.push(newStr)
        }
        //  after that loop has finished, return the new array
        return newArr
        //  if the length of the string is odd
    } else {
        //  define variable for the last index
        let lastIndex = strArr.length - 1
        //  define a variable for the final pair (element at the last index plus '_')
        let lastPair = strArr[lastIndex].concat('_')
        //  loop through the string, stopping at the second-to-last element
        for (let i = 0; i < strArr.length - 2; i = i + 2) {
            //  join the element to the next
            newStr = strArr[i].concat(str[i + 1])
            //  add the new string to the container
            newArr.push(newStr)
        }
        //  after the loop is finished, add the last pair to the array and return it
        newArr.push(lastPair)
        return newArr
    }
}
console.log(solution('abcdefg'))
console.log(solution('abcde'))
