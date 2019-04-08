/*
Problem Statement
Write a program that returns length of given word, and its lowercase, and uppercase version.


Input
length("hello");
lowerCase("BrEak");
upperCase("LiVe");
Expected Output
5
'break'
'LIVE'

*/

function length(word){
    return word.length;
}

function lowerCase(word){
    return word.toLowerCase();
}

function upperCase(word){
    return word.toUpperCase();
}
