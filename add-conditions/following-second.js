/*
Write a program that asks for a time under the 
form of three information (hours, minutes, seconds). 
The program calculates and shows the time one second 
after. Incorrect inputs must be taken into account.
*/


//Example input being 14 hours, 17 mins and 59 seconds
let hour = Number(prompt("Enter the hours: ")); //14
console.log(hour);
let min = Number(prompt("Enter the minutes: ")); //17
console.log(min);
let sec = Number(prompt("Enter the seconds: ")); //59
console.log(sec);

sec = sec + 1;
console.log(sec);
if(sec === 60) 
{
  min = min + 1;
  sec = sec - 60;
  console.log(min);
  if(min > 60) 
  {
  	hour = hour + 1;
    console.log(hour);
  } 
} 
console.log("In a second, time will be " + hour + " hours, " + min + " minutes, and " + sec + " seconds.");
