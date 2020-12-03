const maximumWealth = function(accounts) {
    //  map the accounts to individual account and reduce each account's elements into a single value
    //  this will return an array
    const accountTotals = accounts.map(account => account.reduce((acc, current) => acc + current));
    //  return the largest value from that array
    return Math.max(...accountTotals);
};


console.log(maximumWealth([[1,5],[7,3],[3,5]])) //  returns 10
console.log(maximumWealth([[1,2,3],[3,2,1]])) //  returns 6