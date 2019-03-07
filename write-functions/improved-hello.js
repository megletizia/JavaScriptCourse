/*
Complete the below program so that it asks the user for his 
first and last names, then show the result of the sayHello()
function.

Input
Enter First Name: Elton
Enter Last Name: Jhon
sayHello(Elton,Jhon);
Expected Output
Hello, Elton Jhon!
Hello, Elton Jhon!
*/

function sayHello(first, last){
	let message = `Hello, ${first} ${last} !`;
  return message;
}

const first = prompt("Enter First Name: ");
const last = prompt("Enter Last Name: ");

console.log(sayHello(first, last));