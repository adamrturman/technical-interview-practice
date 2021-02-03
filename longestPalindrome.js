const longestPalindrome = function(s) {
    //  helper function to check if a string is a palindrome
    function isPalindrome(string) {
        let right = string.length - 1;
        let left = 0;
        while (left < right) {
            if (string[right] !== string[left]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    //  loop through the input
    for (let i=0; i<s.length; i++) {
        //  create pointers to check all substrings
        let leftPointer = i;
        let rightPointer = s.length-1;
        //  since the pointers will decrement, exit the while loop to increment i when the left pointer is less than zero
        while (leftPointer >= 0) {
            //  create a portion to check
            let portion = s.substring(leftPointer, rightPointer +1)
            //  use the helper function and check the length
            if (isPalindrome(portion) && portion.length > 1) {
                return portion;
            }
            leftPointer--;
            rightPointer--;
        }
    }
    return "too short - does not count!"
};
console.log(longestPalindrome("abracecarcd"))   //  returns "racecar"
console.log(longestPalindrome("aa"))    //  returns "aa"
console.log(longestPalindrome("babad")) // returns "aba"
console.log(longestPalindrome("ac"))    //  returns "too short - does not count!"
