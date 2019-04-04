/*
Create an object that contains following properties:

list: array to store words
addWord(word) : function to add given word in list array except the words ending with ing

Input
addWord("Hello");
addWord("World");
addWord("Working");
addWord("London");
Expected Output
list = ["Hello","World","London"]
*/

var words = {
  list: [],
  addWord(value){
    if(!value.endsWith("ing")){
      this.list.push(value);
    }
  }
};
