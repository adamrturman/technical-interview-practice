function countTriplets(arr, r) {
    let count = 0;
    let second = 1;
    let third = 2;
    for (let first= 0; first < arr.length-3; first++) {
        if (arr[second] >= arr[first]*r) {
            if (arr[third] >= arr[second]*r) {
                count++;
            } else {
                third++;
            }
        }
        first++;
        second = first+1;
        third = second+1;
    }

    //  if the next index is greater than current * r, increment the count by 1/2
    //  round the answer down to eliminate doubles instead of triples
    //  reset count to zero
    //  proceed through the array
    //  return the rounded down count
    return roundedDown;

};

console.log(countTriplets([1,2,2,4], 2))