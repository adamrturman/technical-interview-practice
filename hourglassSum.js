function hourglassSum(arr) {
    let container = [];
    let sum;
    let row = 0;
    let column = 0;
    console.log(arr[0][1]+ arr[0][2]+ arr[0][3]+ arr[1][2]+ arr[2][1]+ arr[2][2]+ arr[2][3])

    while (row < 4) {
        while (column < 4) {
            sum = arr[row][column] + arr[row][column + 1] + arr[row][column + 2] + arr[row + 1][column + 1] + arr[row + 2][column] + arr[row + 2][column + 1] + arr[row + 2][column + 2]
            container.push(sum)
            column++;
        }
        column = 0;
        row++;
    }
    return Math.max(...container)
}


console.log(hourglassSum(
    [ [ -1, -1, 0, -9, -2, -2 ],
        [ -2, -1, -6, -8, -2, -5 ],
        [ -1, -1, -1, -2, -3, -4],
        [ -1, -9, -2, -4, -4, -5],
        [ -7, -3, -3, -2, -9, -9],
        [ -1, -3, -1, -2, -4, -5] ]))

console.log(hourglassSum(
    [ [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 2, 4, 4, 0 ],
    [ 0, 0, 0, 2, 0, 0 ],
    [ 0, 0, 1, 2, 4, 0 ] ]))