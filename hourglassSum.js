function hourglassSum(arr) {
    //  in 2d array, first index in the row, the second is the column
    //  create container for all sums
    let container = [];
    let i = 0
    for (let i = 0; i < arr.length -1; i++) {
        while (i < arr.length-1) {
            let middle = 1

        }
    }

    //  push that answer to the container
    //  find and return the max value of the container
};

console.log(hourglassSum([ [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 2, 4, 4, 0 ],
    [ 0, 0, 0, 2, 0, 0 ],
    [ 0, 0, 1, 2, 4, 0 ] ]))