/*
Write a program that creates an array of following elements, then returns the second minimum element.

Input
values = [3, 11, 7, 2, 9, 10];
Expected Output
3
3
*/

function secondMinimum(values){
  var min = values[0];
  sndMin = values [0];
  for( value of values){
    if(min > value) {
      sndMin = min;
      min = value;
    }
  }
  return sndMin;
}
