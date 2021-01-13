//  https://www.hackerrank.com/challenges/plus-minus/problem

//  Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
//
// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
//
// Example
//
// There are  elements, two positive, two negative and one zero. Their ratios are 2/5, 2/5  and 1/5 . Results are printed as:
//
// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr) {
    let negative = 0;
    let zero = 0;
    let positive = 0;
    for (let i =0; i<arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }
    const total = positive + zero + negative;
    const positiveProportion = positive/total;
    const zeroProportion = zero/total;
    const negativeProportion = negative/total;

    console.log(positiveProportion.toFixed(6));
    console.log(negativeProportion.toFixed(6));
    console.log(zeroProportion.toFixed(6));
}

console.log(plusMinus(-4, 3, -9, 0, 4, 1))
//  returns 0.500000
//  0.333333
//  0.166667