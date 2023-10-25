const Dragon = require('./dragon');

class FriendlyDragon extends Dragon {
    constructor (name, color, lifeGoals, friend){
        super(name, color);
        this.lifeGoals = Array.isArray(lifeGoals) ? lifeGoals : [];
        this.friend = friend;
    }
    hasLifeGoals(){
        for (const goal of this.lifeGoals ){
            console.log(`${this.name} likes to ${goal}`);
        }
    }
    helpsPeople(){
        return `${this.name} helps their friend ${this.friend}`;
    }
}

try {
    module.exports = FriendlyDragon;
  } catch {
    module.exports = null;
  }
