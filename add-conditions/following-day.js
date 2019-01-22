/*
Write a program that accepts a day name from the user in the variable, 
then shows the name of the following day. Incorrect inputs must be taken into account.
*/

const day = prompt("Enter day : ");

switch (day){
    case "Monday":
        console.log("Tuesday");
        break;
    case "Tuesday":
        console.log("Wednesday");
        break;
    case "Wednesday":
        console.log("Thursday");
        break;
    case "Thursday":
        console.log("Friday");
        break;
    case "Friday":
        console.log("Saturday");
        break;
    case "Saturday":
        console.log("Sunday");
        break;
    case "Sunday":
        console.log("Monday");
        break;
    default:
        console.log("Not a valid day");
}