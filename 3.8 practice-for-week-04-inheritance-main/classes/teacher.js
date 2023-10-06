const Person = require('./person');

class Teacher extends Person{
  constructor (firstName, lastName, age, subject, yearsOfExperience){
    super(firstName,lastName,age);
      this.subject = subject;
      this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience (teachers){
    let total = 0;
    for (let i = 0; i < teachers.length; i++){
      total += teachers[i].yearsOfExperience;
    }
    return total;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
