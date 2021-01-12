const removeOuterParentheses = function(S) {
    const sArray = S.split('')
    for (let i=0; i< sArray.length; i++) {
        if(sArray[i] === '(') {
            sArray.splice(i, 1);
            break;
        }
    }
    for (let i=(sArray.length-1); i>=0; i--) {
        if(sArray[i]=== ')') {
            sArray.splice(i,1);
            return sArray;
        }
    }

};

console.log(removeOuterParentheses("(()())(())"))