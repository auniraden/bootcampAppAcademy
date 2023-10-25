class Dragon {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
   breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }
  static getDragons(...dragons){
    const dragonNames = [];

    dragons.forEach(dragon => {
      if (dragon instanceof Dragon){
        dragonNames.push(dragon.name);
      }
    })
    return dragonNames;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
