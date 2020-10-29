
const defangIPaddr = function(address) {
    //  take in a string and split it
    let splitAddress = address.split('')
    //  loop through the array
    for (let i = 0; i<splitAddress.length; i++)
        //  if you find an index with value '.'
        if (splitAddress[i] === '.') {
            //  add the opening bracket at that index
            splitAddress.splice(i, 0, '[');
            //  add the closing bracket at two past that index, accounting for the new addition
            splitAddress.splice(i+2, 0, ']');
            //  increment i by two to jump past the two inserted items
            i +=2;
        }
    //  turn the array back into a string
    const joinedAddress = splitAddress.join('')
    //  return the string
    return joinedAddress
};

defangIPaddr("1.1.1.1") // returns "1[.]1[.]1[.]1"