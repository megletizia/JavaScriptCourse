/*Write a program that plays “neither yes, nor no” 
with the user. Specifically, the programs asks the
user to enter text until either “yes” or “no” is
typed, which ends the game.*/

let input = prompt("Enter text: ");

while(input!=="yes" && input!== "no")
{
	console.log(input);
  input = prompt("Enter text again for say no/yes to quit: ");
}
console.log("Game Ends");