/*
Write a program that accepts a month number
(between 1 and 12), then shows the number
of days of that month. Leap years are excluded.
Incorrect inputs must be taken into account.
*/

const month = prompt("Enter a month number : ");

switch (month) {
    case '1':
        var monthDays = 31;
        break;
    case '2':
        var monthDays = 28;
        break;
    case '3':
        var monthDays = 31;
        break;
    case '4':
        var monthDays = 30;
        break;
    case '5':
        var monthDays = 31;
        break;
    case '6':
        var monthDays = 30;
        break;
    case '7':
        var monthDays = 31;
        break;
    case '8':
        var monthDays = 31;
        break;
    case '9':
        var monthDays = 30;
        break;
    case '10':
        var monthDays = 31;
        break;
    case '11':
        var monthDays = 30;
        break;
    case '12':
        var monthDays = 31;
        break;
    default:
        monthDays = "invalid month";
}
console.log("Number of days: " + monthDays);