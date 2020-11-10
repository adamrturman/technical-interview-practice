//  https://leetcode.com/problems/defanging-an-ip-address/

//  Given a valid (IPv4) IP address, return a defanged version of that IP address.
//
// A defanged IP address replaces every period "." with "[.]".
//
//
//
// Example 1:
//
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:
//
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"


//  First solution before refactoring
// const defangIPaddr = function(address) {
//     //  take in a string and split it
//     let splitAddress = address.split('')
//     //  loop through the array
//     for (let i = 0; i<splitAddress.length; i++)
//         //  if you find an index with value '.'
//         if (splitAddress[i] === '.') {
//             //  add the opening bracket at that index
//             splitAddress.splice(i, 0, '[');
//             //  add the closing bracket at two past that index, accounting for the new addition
//             splitAddress.splice(i+2, 0, ']');
//             //  increment i by two to jump past the two inserted items
//             i +=2;
//         }
//     //  return the array after joining back into a string
//      return splitAddress.join('')
// };
//
// defangIPaddr("1.1.1.1") // returns "1[.]1[.]1[.]1"

//  Refactored to use a regular expression (search for all non-integers and replace)

const defangIPaddr = function(address) {
    return address.replace(/\D/g, '[.]')
};

defangIPaddr("1.1.1.1") // returns "1[.]1[.]1[.]1"