//  https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

//  Given a m x n matrix grid which is sorted in non-increasing
//  order both row-wise and column-wise, return the number of negative numbers in grid.

//  Initial solution
const countNegatives1 = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        let j = grid[i].length -1;
        while (grid[i][j] < 0) {
            count++;
            j--;
        }
    }
    return count;
};

//  Second solution - reduce the subarray

const countNegatives = function(grid) {
    return grid.reduce((finalCount, subArray) => {
        finalCount += subArray.reduce((subArrayCount, currentNumber) => {
            if (currentNumber < 0) {
                subArrayCount++;
            }
            return subArrayCount;
        }, 0);
        return finalCount;
    }, 0);
};

console.log(countNegatives1([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))  //  returns 8
console.log(countNegatives1([[3,2],[1,0]]))  //  returns 0
console.log(countNegatives2([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))  //  returns 8
console.log(countNegatives2([[3,2],[1,0]]))  //  returns 0
