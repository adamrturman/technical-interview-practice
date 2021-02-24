function minimumBribes(q) {
    let hash = {};
    let maxArray = [];
    for (let i=0; i<q.length; i++) {
        if (!hash.hasOwnProperty(q[i])) {
            hash[q[i]] = i;
        } else {
            return
        }
    }
    for (let i=0; i<q.length; i++) {
        if (q[i] - 3 > hash[q[i]]){
            console.log('Too chaotic')
            return
        }
        if (q[i] - hash[q[i]] - 1 > 0) {
            maxArray.push(q[i] - hash[q[i]] - 1)
        }
    }
    console.log(maxArray.reduce((acc,curr) => acc+curr));
}
console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]))
