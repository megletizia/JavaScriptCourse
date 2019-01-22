/*
Write a program that takes in a raw price input and
calculates the corresponding final price using a VAT of 20.6%
*/

const priceInput = prompt("Enter Raw Price: "); //Input is 1200
var price = Number(priceInput);
var vat = .206;

var percentVat = price * vat; //Should be 247.2
var finalPrice = percentVat + price; //Should be 1447.2

console.log("Final Price: " + finalPrice); //Should be Final Price: 1447.2