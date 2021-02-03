const countGoodTriplets = function(arr, a, b, c) {
    function checkTriplets(arr) {
        let count = 0;
        for (let i=0; i< arr.length; i++) {
            if (Math.abs([arr[i][0]] - [arr[i][1]]) <=a && Math.abs([arr[i][1]] - [arr[i][2]]) <=b && Math.abs([arr[i][0]] - [arr[i][2]]) <=c) {
                count++;
            }
        }
        return count;
    }

    let container = [];
    for (let i =0; i< arr.length; i++) {
        for (let j=0; j<arr.length; j++) {
            for(let k=0; k<arr.length; k++) {
                container.push(new Array(arr[i], arr[j], arr[k]))
            }
        }
    }
    return checkTriplets(container)
};

console.log(countGoodTriplets([7,3,7,3,12,1,12,2,3], 5, 8, 1))
console.log(countGoodTriplets([1,1,2,2,3] ,0, 0, 1))