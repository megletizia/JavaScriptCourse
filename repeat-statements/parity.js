/*
Create a program that shows exactly 10 odd numbers
*/

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    console.log(`${i} is odd`);
  }
}

/*
Improve the above program again to replace the 
initial number 1 by a number given by the user
and then print 10 numbers starting from the 
number entered by user, and identify whether they are even or odd.
*/

const number = Number(prompt("Enter number: "));
for (var i = number; i < number+10; i++){
	if(i % 2 ===1) {
  	console.log(i+" is odd");
  }
  else {
  console.log(i+" is even");
  }
}