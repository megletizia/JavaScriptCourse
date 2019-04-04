/*
Write a program that calculates the sum of all the 
elements present in it. Your function should also
handle negative values.

Input
values = [3, 11, 7, 2, 9, 10];
Expected Output
42
*/

function sumArray(values){
  let sum = 0;
  for(element of values){
      sum += element;
    }
  return sum;
}
