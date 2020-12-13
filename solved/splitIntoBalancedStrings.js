const balancedStringSplit1 = function(s) {
    let answer = 0;
    let count = 0;
    for (let i=0; i< s.length; i++) {
        if (s[i] === "R") {
            count++;
        } else if (s[i] === "L") {
            count--;
        }
        if (count === 0) {
            answer++;
        }
    }
    return answer;
}
const balancedStringSplit2 = function(s) {
    let answer = 0;
    let count = 0;
    new Array(...s).forEach(element => {
        if (element === "R") {
            count++;
        } else if (element === "L") {
            count--;
        }
        if (count === 0) {
            answer++;
        }
    })
    return answer;
};