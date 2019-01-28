/*
Write a program that continues to ask the user
for a number until the entered number is less
than or equal to 100.
*/

let number = 101;
while (number > 100) {
  number = Number(prompt("Enter a number less than or equal to 100:"));
}



/*
Now, improve the program so that the terminating 
number is between 50 and 100.
*/

let number = 101;
while (number > 100 | number < 50) {
  number = Number(prompt("Enter a number between 50 and 100: "));
}