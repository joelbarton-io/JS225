class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  communicate() {
    console.log('communicating');
  }

  eat() {
    console.log('eating');
  }

  sleep() {
    console.log('sleeping');
  }
}

module.exports = Person;
