//  https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
//
//     For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
//
//     Function Description
//
// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.
//
//     sockMerchant has the following parameter(s):
//
// n: the number of socks in the pile
// ar: the colors of each sock
// Input Format
//
// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers describing the colors  of the socks in the pile.


function sockMerchant(n, ar) {
//  n is the ar.length+1
//  sort the ar
    ar.sort()
//  create a counter starting at zero
    let count = 0
//  loop through the array
    for (let i = 0; i < n - 1; i++) {
//  if the consecutive elements are the same
        if (ar[i] === ar[i + 1]) {
            // increase the count by one
            count++
            // increase i by one so we can check for another pair instead of a triple
            i++
        }
    }
    return count
}
console.log(sockMerchant(9, [1,2,1,2,1,3,2]))