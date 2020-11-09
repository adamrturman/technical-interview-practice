const fs = require('fs');

const fileContents = fs.readFileSync('logData.txt').toString()

const splitIntoLines = fileContents.split('\n')

const dataLines = splitIntoLines.filter(line => line[0] === '[');

const bytes = dataLines.reduce((accumulator, currentValue) => {
    console.log(currentValue.match(/^.* (\d+)$/)[1])
}, 0)

console.log(bytes)
