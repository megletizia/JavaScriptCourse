/*
Write a program that launches a carousel for 10 turns,
showing the turn number each time. 
Write it using a while loop as well as a for loop.
*/

for(var i=1; i<=10; i++){
  console.log("Turn number: "+ i);
}

var j=1;
while(j<=10){
  console.log("Turn number: "+ j);
  j++
}


/*Now, improve it so that the number of turns is given by the user.*/

const turns = prompt("Enter number of turns: ");
var j = 1;
while(j<=turns){
  console.log("Turn number: "+ j);
  j++
}