function hourglassSum(arr) {
    let container = [];
    let left = 0;
    let center = left +1;
    let right = center +1;
    let bottomL = left + 2;
    let bottomC = bottomL +1;
    let bottomR = bottomC +1;
    let middle = center;
    console.log(arr.length)
    while (right < arr.length && bottomL < arr.length) {
        let sum = arr[left][left] + arr[left][center] + arr[left][right] + arr[center][center] + arr[bottomL][left] + arr[bottomL][center] + arr[bottomL][right]
        console.log(sum)
        left++;
    }
}

console.log(hourglassSum())