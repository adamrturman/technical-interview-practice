function rotLeft(a, d) {
    //  create shallow copy
    let copy = a.slice()
    let count = 0
    while (count < d) {
        console.log(copy)
        //  grab the first element of the copy
        let first = copy[0]
        //  grab the rest of the copy
        let rest = copy.slice(1, copy.length+1)
        //  redefine the copy as rest+first
        copy = rest.concat(first)
        count++;
    }
    return copy;
}

console.log(rotLeft([1,2,3,4,5], 4))