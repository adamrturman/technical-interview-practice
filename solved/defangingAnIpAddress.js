//  https://leetcode.com/problems/defanging-an-ip-address/

//  Given a valid (IPv4) IP address, return a defanged version of that IP address.
//
// A defanged IP address replaces every period "." with "[.]".
// Example:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

//  First solution before refactoring
const defangIPaddr1 = function(address) {
    let splitAddress = address.split('')
    for (let i = 0; i<splitAddress.length; i++)
        if (splitAddress[i] === '.') {
            splitAddress.splice(i, 0, '[');
            splitAddress.splice(i+2, 0, ']');
            i +=2;
        }
     return splitAddress.join('');
};
defangIPaddr1("1.1.1.1") // returns "1[.]1[.]1[.]1"

//  Refactored to use a regular expression (search and replace all all non-digits)
const defangIPaddr2 = function(address) {
    return address.replace(/\D/g, '[.]')
};
defangIPaddr2("1.1.1.1") // returns "1[.]1[.]1[.]1"