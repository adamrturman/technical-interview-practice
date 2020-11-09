//  Merge two arrays
//  a = [1,2,3]
//  b = [2,5,5]
//   should return [1,2,2,3,5,5]

function mergeArrays(a, b) {
    //  concat the input arrays into one new array
    const unsortedCombined = a.concat(b)
    //  return that array sorted
    return unsortedCombined.sort((a, b) => a - b)

}