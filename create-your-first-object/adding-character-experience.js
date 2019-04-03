/*
Improve our example RPG program to add an experience property
named xp to the character. Its initial value is 00. Experience
must appear in character description.
*/

var aurora = {
  name: 'aurora',
  health: 150,
  strength: 25,
  xp: 0,
  describe(){
      return `${this.name} has ${this.health} health points and ${this
      .strength} as strength and ${this.xp} xp`;
  }
};
