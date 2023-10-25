class GradeBook {
  constructor(gradeList) {
    this.gradeList = gradeList;
  }

  getAverage(bonus = 0) {
    const sum = this.gradeList.reduce((total, grade) => total + grade, 0);
    const average = sum/this.gradeList.length;
    return average + bonus;
  }
}

module.exports = GradeBook;
