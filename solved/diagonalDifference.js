//  https://www.hackerrank.com/challenges/diagonal-difference/problem

//  Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//
// For example, the square matrix  is shown below:
//
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1+5+9=15. The right to left diagonal = 3+5+9=17. Their absolute difference is 2.
function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;
    let i=0;
    let j= arr.length-1
    let k=0;
    while(i < arr.length) {
        leftToRight += arr[i][i];
        i++;
        console.log(leftToRight)
    }
    while(j >= 0 && k<arr.length) {
        rightToLeft += arr[j][k];
        j--;
        k++;
    }
    return Math.abs(leftToRight-rightToLeft);
}

console.log(diagonalDifference([11,2,4],[4,5,6],[10,8,-12])) //returns 15