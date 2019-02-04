/*Write a program that shows all numbers between 1 and 100*/
for(let i = 0; i<=100; i++)
{
    console.log(i);
}

/*Write a program that shows all numbers between 1 and 100
with the following exception:
It shows "Fizz" instead if the number is divisible by 3
*/
for(let i = 1; i<=100; i++){
  var tmp = i%3;
  if(tmp===0){
    console.log("Fizz");
  }else{
    console.log(i);
  }
}

/*Write a program that shows all numbers between 1 and 100
with the following exceptions:
It shows "Fizz" instead if the number is divisible by 3
It shows "Buzz" instead if the number is divisible by 5 and not by 3.
*/
for(let i = 1; i<=100; i++){
  let tmp = i%3;
  let tmp2 = i%5;
  if(tmp===0){
    console.log("Fizz");
  }
  if(tmp2===0)
  {
    console.log("Buzz");
  }else{
    console.log(i);
  }
}

/*Write a program that shows all numbers between 1 and 100
with the following exceptions:
It shows "Fizz" instead if the number is divisible by 3
It shows "Buzz" instead if the number is divisible by 5 and not by 3.
It shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
*/
for(let i = 1; i<=100; i++){
  let tmp = i%3;
  let tmp2 = i%5;
  if(tmp===0){
    if(tmp2===0){
      console.log("FizzBuzz");
    }else{
    console.log("Fizz");
    }
  }else if(tmp2===0)
  {
    console.log("Buzz");
  }else{
    console.log(i);
  }
}