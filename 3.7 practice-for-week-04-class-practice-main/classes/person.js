class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce(){
    console.log(`Hi, I'm ${this.firstName} ${this.lastName} and I'm, ${this.age} years old.`);
  }
}

//a static method called introducePeople that will take in an array of Person instances. Have the method console.log an error message of "introducePeople only takes an array as an argument." if the argument is not of type Array. Have the method console.log an error message of "All items in array must be Person class instances." if any of the items in the array are not instances of the Person class. If there are no errors logged to the console, call introduce on each of the People instances in the input array.

Person.introducePeople = function(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("introducePeople only takes an array as an argument.");
  }
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] instanceof Person)) {
      throw new Error("All items in array must be Person class instances.");
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].introduce();
  }
};



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
