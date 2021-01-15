//  https://www.hackerrank.com/challenges/time-conversion/problem

//  Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
//
// Example
// s= '12:01:00PM'
//
// Return '12:01:00'.
// s= '12:01:00AM'
//
// Return '00:01:00'.

function timeConversion(s) {
    let am
    let pm
    let newHour
    if (s.substring(8,10) === 'AM') {
        am = true;
    } else {
        pm = true;
    }
    const noSuffix = s.replace(/[A-Z]/gm, '')
    let hour = noSuffix.substring(0,2)
    if (am && hour === '12') {
        newHour = '00'
        return noSuffix.replace(hour, newHour)
    } else if (am || pm && hour === '12' ) {
        return noSuffix
    } else {
        newHour = parseInt(hour) + 12;
        return noSuffix.replace(hour, newHour)
    }
}
console.log(timeConversion('12:45:54PM'))
console.log(timeConversion('12:01:00AM'))
