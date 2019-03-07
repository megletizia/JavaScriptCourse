/*
Let’s pretend the JavaScript Math.min() function doesn’t exist.
Complete the below program so that the min() function returns
the minimum of its two received numbers.

Input
min(4.5, 5)
min(19, 9)
min(1, 1)
Expected Output
4.5

9

1
*/

function min(num1, num2){
  if(num1>num2)return num2;
  return num1;
}