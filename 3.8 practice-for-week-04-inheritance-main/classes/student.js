const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, age, major, gpa) {
    super(firstName, lastName, age);
    this.major = major;
    this.gpa = gpa;

  }
static compareGPA (studentA, studentB){
  if (studentA.gpa > studentB.gpa) {
    return `${studentA.firstName} ${studentA.lastName} has the higher GPA.`;
  } else if (studentA.gpa === studentB.gpa) {
    return `Both students have the same GPA`;
  } else if (studentB.gpa > studentA.gpa){
    return `${studentB.firstName} ${studentB.lastName} has the higher GPA.`;
  }
}
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
