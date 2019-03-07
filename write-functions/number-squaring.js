/*
Problem Statement
Complete the below program so that the square1() and 
square2() functions work properly.

Input
square1(0);
square1(2);
square1(5);

square2(0);
square2(2);
square2(5);

Expected Output
0
4
25

0
4
25
*/

// Square the given number x
function square1(x) {
  var sqr = x*x;
  return sqr;
}

// Square the given number x
const square2 = x => x*x; // TODO: complete the function code

/*
When it’s done, update the program so that it shows the square of every number between 00 and 1010.
*/

// Square the given number x
function square(x) {
   let sqr = x*x;
   return sqr;
}
// Call the above function repeatedly to print square of every number
// between 0 and 10
 for(let i=1; i<10; i++){
   console.log(square(i));
 }