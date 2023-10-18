const Person = require('./pretendProgram/person');
const Doctor = require('./pretendProgram/doctor');
const Professor = require('./pretendProgram/professor');
const Student = require('./pretendProgram/student');
const GraduateStudent = require('./pretendProgram/gradStudent');


const person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'








































// function Person(firstName, lastName, age, gender) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.fullName = function () {
//   return this.firstName + ' ' + this.lastName;
// }

// Person.prototype.communicate = function () {
//   console.log('communicating');
// }

// Person.prototype.eat = function () {
//   console.log('eating');
// }

// Person.prototype.sleep = function () {
//   console.log('sleeping');
// }

// function Doctor(firstName, lastName, age, gender, specialization) {
//   Person.prototype.constructor.call(this, firstName, lastName, age, gender);
//   this.specialization = specialization;
// }
// Doctor.prototype = Object.create(Person.prototype);
// Doctor.prototype.constructor = Doctor;

// Doctor.prototype.diagnose = function () {
//   console.log('diagnosing');
// }

// function Professor(firstName, lastName, age, gender, subject) {
//   Person.prototype.constructor.call(this, firstName, lastName, age, gender);
//   this.subject = subject;
// }

// Professor.prototype = Object.create(Person.prototype);
// Professor.prototype.constructor = Professor;

// Professor.prototype.teach = function () {
//   console.log('teaching');
// }

// function Student(firstName, lastName, age, gender, degree) {
//   Person.prototype.constructor.call(this, firstName, lastName, age, gender);
//   this.degree = degree;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.study = function () {
//   console.log('studying');
// }

// GraduateStudent.prototype = Object.create(Student.prototype);
// GraduateStudent.prototype.constructor = GraduateStudent;

// function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
//   Student.prototype.constructor.call(this, firstName, lastName, age, gender, degree);
//   this.graduateDegree = graduateDegree;
// }

// GraduateStudent.prototype.research = function () {
//   console.log('researching');
// }
// const person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

// const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'