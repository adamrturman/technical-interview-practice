const countPrimes = function(n) {
    //  helper function to determine whether a number is prime
    function isPrime(num) {
        if (num === 1) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0 && num !== i) {
                return false;
            }
        }
        return true;
    }
    //  starting at the number one less than that target
    //  apply the helper function and decrement until reaching 0
    //  increment a count every time a prime is found
    let count = 0;
    let start = n-1
    while (start > 1) {
        if (isPrime(start)) {
            count++;
        }
        start--;
    }
    return count;

};

console.log(countPrimes(10));   //  returns 4
console.log(countPrimes(123))   //  returns 30
console.log(countPrimes(1234))  //  returns 202
console.log(countPrimes(12345))  //  returns 1474
console.log(countPrimes(99999)) //  breaks due to timeout error!

const countPrimes2 = function(n) {
    //  create an array iterator object with keys the length of n
    //  use the spread syntax to apply those values to an array
    let numbers = [...Array(n).keys()];

    //  Sieve of Eratosthenes

    //  Mark multiples to remove non-primes
    //  Starting at 2, increment up to the target
    for (let i=2; i<n; i++) {
        //  if we haven't already marked the number
        if (numbers[i] !== 1) {
            //  mark all of the multiples of that number
            for (let j= i*i; j<n; j+=i){
                numbers[j] = 1;
            }
        }
    }
    //  filter out any numbers marked as 1 and the initial zero
    const primes = numbers.filter(number => number > 1);
    //  return the length of that array
    return primes.length;
};




console.log(countPrimes2(10));   //  returns 4
console.log(countPrimes2(123))   //  returns 30
console.log(countPrimes2(1234))  //  returns 202
console.log(countPrimes2(12345))  //  returns 1474
console.log(countPrimes2(99999)) //  returns 9592
console.log(countPrimes2(123456)) //  returns 11601
console.log(countPrimes2(1234567)) //  returns 95360

