function solution(ranks) {
    let answer = 0;
    //  make a hash table to store the elements in the ranks and their number of instances
    let count = {};
    for (let i = 0; i < ranks.length; i++) {
        if (!count.hasOwnProperty(ranks[i])) {
            count[ranks[i]] = 1
        } else {
            count[ranks[i]] += 1
        }
    }

    const rankType = Object.keys(count)
    for (let i=0; i< rankType.length; i++) {
        if (rankType[i] + 1 == rankType[i+1]) {
            answer += count[i];
        }
    }
}

console.log(solution([3, 4, 3, 0, 2, 2, 3, 0, 0]))