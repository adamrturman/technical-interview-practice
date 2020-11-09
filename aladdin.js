
function optimalPoint(magic, dist) {
    // Create a variable for our answer
    let answer = []
    let counter = 0
    let i =0
    //  loop through the magic array the number of
    while (i < magic.length) {
        if (i >= magic.length - 1) {
            let i = 0
        }
        counter += magic[i]
        counter -= dist[i+1]
        if (counter <= 0){
            i++
        }
        answer.push(counter)
        i++
    }
    return answer.sort()
}

console.log(optimalPoint ([2,4,5,2], [4,3,1,3]))