//  https://www.hackerrank.com/challenges/staircase/problem

//  Staircase detail
//
// This is a staircase of size :
//
//    #
//   ##
//  ###
// ####
// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
//
// Write a program that prints a staircase of size .

function staircase(n) {
    let container = new Array(n).fill(' ')
    let pointer = container.length -1
    while(pointer >=0) {
        container[pointer] = '#';
        console.log(container.join(''));
        pointer--;
    }
}

console.log(staircase(6))
//  returns:
//      x
//     xx
//    xxx
//   xxxx
//  xxxxx
// xxxxxx