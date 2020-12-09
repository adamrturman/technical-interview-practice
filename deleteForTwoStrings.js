//

const minDistance = function(word1, word2) {
    //  count for each word
    let countOne = 0;
    let countTwo = 0;
    let i = 0;
    let j = 0;
    while(i < word1.length) {
        if (word1[i] !== word2[j] && word1[i] === word2[j+1]) {
            countTwo++;
            i = j+1;
            j= i+1;
        }
        if (word1[i] !== word2[j] && word1[i+1] === word2[j]) {
            countOne++;
            i= j+1;
            j = i+1;
        } else {
            i++;
            j++;
        }
    }
    return countOne + countTwo;
}

    console.log(minDistance("sea", "eat"))
    console.log(minDistance("", "b"))
    console.log(minDistance("a", "b"))