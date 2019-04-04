/*
Write a program that creates an array of following elements, then returns the maximum element in the array.

Input
values = [3, 11, 7, 2, 9, 10];
Expected Output
11
*/

function maxElement(values){
  var max = values[0];
  for(elements of values){
    if(elements > max){
      max = elements;
  }
  }
  return max;
}
