const halvesAreAlike = function(s) {
    //  slice the input in half
    const firstHalf = s.slice(0, s.length/2);
    const secondHalf = s.slice(s.length/2);

    function vowelCount(string) {
        //  use a regex to create an array of vowels
        const vowelArray = string.match(/[AEIOUaeiou]/gm)
        //  if we find any vowels, return the length of that array
        if (vowelArray) {
            return vowelArray.length;
        }
        //  if we don't find any vowels, return 0
        return 0;
    }
    //  compare the two counts of vowels
    return vowelCount(firstHalf) === vowelCount(secondHalf);
};

console.log(halvesAreAlike('textbook')) //  returns false
console.log(halvesAreAlike('MerryChristmas')) //  returns false
console.log(halvesAreAlike('book')) //  returns true
console.log(halvesAreAlike('AbCdEfGh')) //  returns true
console.log(halvesAreAlike('qwrtyplkjhgfdszxcvbnm'))    //  returns true

