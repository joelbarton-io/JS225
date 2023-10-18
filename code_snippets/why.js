class Being {
  constructor(name) {
    this.name = name
  }
}

let prot;

class Person extends Being {
  constructor(name, age) {
    super(name);
    this.age = age;
    console.log(this.__proto__ === Object.getPrototypeOf(this));
    prot = Object.getPrototypeOf(this);
  }
}

// function Being(name) {
//   this.name = name;
// }

// let prot;

// function Person(name, age) {
//   Being.call(this, name); // Call the constructor of the base class
//   this.age = age;
//   console.log(this.__proto__ === Object.getPrototypeOf(this));
//   prot = Object.getPrototypeOf(this);
// }

// // Set up the prototype chain to inherit from Being
// Person.prototype = Object.create(Being.prototype);
// Person.prototype.constructor = Person;

const joel = new Person('joel', 26);
console.log(prot); // Being {} <------------------ ???
console.log(prot === Person.prototype); // true
