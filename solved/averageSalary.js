//  https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/


//  Given an array of unique integers salary where salary[i] is the salary of the employee i.
//
// Return the average salary of employees excluding the minimum and maximum salary.
//
//
//
// Example 1:
//
// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500
// Example 2:
//
// Input: salary = [1000,2000,3000]
// Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000)/1= 2000

const average = function(salary) {
    const sortedSalaries = salary.sort((a,b) => a-b);
    const middleSortedSalaries = sortedSalaries.filter((salary, index) => {
        if (index !== 0 & index !== sortedSalaries.length-1) {
            return salary;
        }
    });
    //  reduce the array to a number and divide by the number of elements
    return middleSortedSalaries.reduce((runningSum, salary) => {
        return runningSum + salary;
    }, 0)/ middleSortedSalaries.length;
};

console.log(average([4000,3000,1000,2000])) //  returns 2500
console.log(average([6000,5000,4000,3000,2000,1000])) //  returns 3500
