/*
Create a Bank Account object with following properties:

A name property set to “Alex”.
A balance property set to 0.
A credit method adding the (positive or negative) value passed as an argument to the account balance.
A describe method returning the account description.
*/

var account={
  name: 'Alex',
  balance: 0,
  credit(value){
    return this.balance += value;
  },
  describe(){
    return '${this.name} , your balance is ${this.balance}';
  }
};
