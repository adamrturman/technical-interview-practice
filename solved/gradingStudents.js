//  https://www.hackerrank.com/challenges/grading/problem

//  Sam is a professor at the university and likes to round each student's grade according to these rules:
//
// If the difference between the grade and the next multiple of 5  is less than  3, round  up to the next multiple of 5.
// If the value of grade  is less than 38 , no rounding occurs as the result will still be a failing grade.
// Examples
//
//  84 round to 85  (85 - 84 is less than 3)
//  29 do not round (result is less than 40)
//  57 do not round (60 - 57 is 3 or higher)

function gradingStudents(grades) {
    let answer = [];
    for (let i=0; i<grades.length; i++) {
        if (grades[i] < 38 || grades[i] >=38 && grades[i] % 5 <=2) {
            answer.push(grades[i]);
        } else if (grades [i] >= 38 && grades[i] % 5 > 2){
            answer.push(grades[i] + (5 - grades[i] % 5));
        }
    }
    return answer
}

console.log(gradingStudents([73, 67, 38, 33]))  //  returns [75, 67, 40, 33]