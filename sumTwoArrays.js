//  https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6/train/javascript

function inputValid(array1, array2) {
    // are they both arrays? Array.isArray(array1)...
    // do they contain only numbers: Number.isInteger(), Number.isNaN()
}

function addArrays(array1, array2) {
    // if (!inputValid(array1, array2)) {
    //     console.log('bad input, existing');
    //     return;
    // }

    //  these functions convert the arrays into numbers
    const arrayToNumber1 = parseInt(array1.join(''));
    const arrayToNumber2 = parseInt(array2.join(''));
    //  the sum as a string
    const sumNumber = arrayToNumber1 + arrayToNumber2;
    const sumString = sumNumber.toString();
    //  create a container
    //   we stopped here last time introducing .map and .reduce
    const container = sumString.split('').map(element => parseInt(element));
    //  loop through the string
    // for (let i = 0; i < sumString.length; i++) {
    //     // add each character to the container
    //     const stringNum = parseInt(sumString[i]);
    //     container.push(stringNum);
    // }
    // sumString.reduce((acc, element) => {
    //
    // }, []);

    if(sumString[0] === '-') {
        container.shift();
        container[0] = -1 * container[0];
    }

    //  this should be the array with the values, but it's empty...
    return container
}

let result = addArrays([-1, 2, 6, 3, 6, 3], [-4, 3 ])
console.log(result)

