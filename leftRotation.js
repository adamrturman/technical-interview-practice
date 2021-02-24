function rotLeft(a, d) {
    //  This works but only for small test cases
        // //  create shallow copy
        // let copy = a.slice()
        // let count = 0
        // while (count < d) {
        //     let first = copy[0]
        //     //  grab the rest of the copy
        //     let rest = copy.slice(1, copy.length+1)
        //     //  redefine the copy as rest+first
        //     copy = rest.concat(first)
        //     count++;
        // }
        // return copy;

        //  d is the length of the slice
        let copy = a.slice();
        let portion = copy.slice(0, d)
        let rest= copy.slice(d, copy.length +1)
        return rest.concat(portion)
    }

console.log(rotLeft([1,2,3,4,5], 4))