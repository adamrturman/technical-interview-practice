// function solution(A, X) {
//     var N = A.length;
//     if (N === 0) {
//         return -1;
//     }
//     var l = 0;
//     var r = N-1;
//     while (l < r) {
//         var m = Math.floor((l + r) / 2);
//         if (A[m] > X) {
//             r = m - 1;
//         } else {
//             l = m;
//         }
//     }
//     if (A[l] == X) {
//         return l;
//     }
//     return -1;
// }

function solution(A, X) {
    var N = A.length;
    if (N === 0) {
        return -1;
    }
    var l = 0;
    var r = N-1;
    while (l < r) {
        var m = Math.floor((l + r) / 2);
        //  Is the target in the lower range
        if (A[m] > X) {
            r--;
        } else if (A[m] < X) {
            l = m;
        }
    }
    if (A[l] == X) {
        return l;
    }
    return -1;
}

console.log(solution([5,6,7,8,9], 4))   //  Lower -1
console.log(solution([5,6,7,8,9], 5))   //  Lower 0
console.log(solution([5,6,7,8,9], 6))   //  Lower middle 1
console.log(solution([5,6,7,8,9], 7))   //  Middle 2
console.log(solution([5,6,7,8,9], 8))   //  upper middle 3
console.log(solution([5,6,7,8,9], 9))   //  upper middle 4
console.log(solution([5,6,7,8,9], 99))  //  Nonexistant -1