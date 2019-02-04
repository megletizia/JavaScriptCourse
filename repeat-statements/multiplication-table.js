/*Write a program that asks the user for a number, 
then shows the multiplication table for this number.*/

const input = Number(prompt("Enter a number: "));

for(var i=1; i<=10; i++){
    var answer = input * i;
    console.log(input+" x "+i+" = "+answer);
}

/*When you are done, improve the program so it only 
accepts numbers between 22 and 99 (use the previous
exercise as a blueprint).*/

const input = Number(prompt("Enter a number between 2 and 9: "));
if(input>1 && input <10)
	{
		for(var i=1; i<=10; i++)
    {
    	var answer = input * i;
  	  console.log(input+" x "+i+" = "+answer);
		}
	}else
  	{
      console.log("This number is not between 2 and 9");
  	}