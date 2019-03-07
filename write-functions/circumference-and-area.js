/*
Problem Statement
Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Here are some tips for solving this exercise:

Circumference and area calculation formulas should be part of your secondary school memories… Or a Google click away :)
The value of number π (Pi) is obtained with Math.PI in JavaScript.
You might want to use the exponentiation operator ** to perform computations.

Input
circumference(2);
circumference(12);

area(20);
area(4);
Expected Output
12.57
75.40

1256.64
50.27
*/

pi = Math.PI;

function circumference(radius){
    var c = 2*pi*radius;
    return c.toFixed(2);
}

function area(radius){
    var a = pi*(radius**2);
    return a.toFixed(2);
}