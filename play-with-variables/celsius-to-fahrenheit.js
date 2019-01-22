/*
Write a program that takes in celsius and displays it in fahrenheit
*/

const Celsius = prompt("Enter Temp in Celsius: ");
var cel = Number(Celsius);

var toFahrenheit = (cel * (9/5) ) + 32;
console.log("Temp in Fahrenheit: " + toFahrenheit);