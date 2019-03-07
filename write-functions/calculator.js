/*
Complete the below program so that it offers
the four basic arithmetical operations: addition, 
subtraction, multiplication and division. You 
can use either a function declaration or a function expression.

Input
calculate(4, "+", 6)
calculate(4, "-", 6)
calculate(2, "*", 0)
calculate(12, "/", 0)
Expected Output
10
-2
0
Infinity
*/

function calculate(num1,unknown,num2){
  switch(unknown){
    case "+":
        return num1+num2;
      break;
    case "-":
        return num1-num2;
      break;
    case "/":
        return num1/num2;
      break;
    case "*":
        return num1*num2;
      break;
    default:
      return undefined;
  }
}