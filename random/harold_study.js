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
    prot = Object.getPrototypeOf(this);
  }
}

const joel = new Person('joel', 26);
console.log(prot); // Being {} <------------------ ???
console.log(prot === Person.prototype); // true
