let outerCtx = {
  exponentVal: 2,
  arrow: (num) => {
    return Math.pow(num, this.exponentVal);
  },
  normal(num) {
    return Math.pow(num, this.exponentVal);
  },
};
// access property with pre-ES6 syntactic sugar
let arrow = outerCtx.arrow;
let normal = outerCtx.normal;

(function (arrow, normal) {
  let arr = [1, 2, 3];
  let ctx = {
    exponentVal: 20
  };

  console.log(arr.map(arrow, ctx));  // [1, 8, 27]
  console.log(arr.map(normal, ctx)); // [1, 1048576, 3486784401]

})(arrow, normal);


/*
Notes:
  - the behavior of the arrow function's static scoping (eg. what `this` is) is fairly diverse across various environments
  - basically don't use the arrow syntax when defining methods and pay attention to the enclosing lexical scope of arrow functions
  - generally it's a good idea to only use arrow functions
*/


/*
Problem:

implement a stack with push/pop/print API
use an array to store stack data

Design requirements:

a) Stack data should be private, i.e., only accessible through the API

b) Stack instances should have a meaningful (proto)type

c) Behaviour should be defined on the prototype

*/

/*
start with factory function:

then do it OLOO:

then do it pseudo-classically

DONE:~finally do it with class syntax~
*/

/* OLOO solution:
  is there a way besides a closure to have private data using object literals?
  is this even OLOO?  How is this different from the factory function object creation pattern?


const stackPrototype = {
  proto: {
    pop() {
      if (!storage.length) {
        throw new Error("Stack is empty!");
      }
      console.log(`Frame: ${storage.pop()} was popped off the stack!`);
    },
    push(...frames) {
      if (!frames.length) {
        throw new Error("No arguments passed.");
      }
      frames.forEach((frm) => {
        console.log(`Frame: ${storage.push(frm)} was pushed onto the stack!`)
      });
    },
    print() {
      storage.forEach((hello) => {
        console.log(hello);
      });
    },
    height() {
      return storage.length;
    },
  },
  create() {
    const storage = [];
  },
};

const stack = Object.create(stackPrototype);
console.log(Object.getPrototypeOf(stack));
stack.push(1, '2');
stack.push(1, '2');
stack.push(1, '2');
stack.push({})
stack.print();
stack.pop();
stack.print();
stack.height();
*/

/* pseudo-classical solution:

function StackPrototype() {
  // is this a bad idea?
  (function () { StackPrototype.storage = []; })()
}

function Stack() {
  StackPrototype.call(this);
}

StackPrototype.prototype.push = function push(item) {
  StackPrototype.storage.push(item);
  console.log(`Frame: ${item} was pushed!`);
  return StackPrototype.storage.length;
};

StackPrototype.prototype.pop = function pop() {
  if (!StackPrototype.storage.length) {
    throw new RangeError("stack is empty; nothing was popped!");
  }
  const popped = StackPrototype.storage.pop();
  console.log(`Frame: ${popped} was popped!`);
  return popped;
};

StackPrototype.prototype.print = function print() {
  if (!StackPrototype.storage.length) {
    return console.log("the Stack is empty!");
  }
  StackPrototype.storage.forEach(frame => console.log(frame));
};

Stack.prototype = Object.create(StackPrototype.prototype); // reassign .prototype prop on Stack to a new object which inherits from { StackPrototype.prototype }
Stack.prototype.constructor = Stack; // add .constructor prop and set value to Stack
const myStack = new Stack();

// console.log(myStack instanceof Stack, myStack instanceof StackPrototype);
// console.log(Stack.prototype.__proto__ === StackPrototype.prototype);

myStack.push(1);
myStack.push(1);
myStack.print();
myStack.pop();
myStack;
*/

/* class syntax solution:
  - uses private field inside "StackPrototype" class


class StackPrototype {
  #storage = []; // private field, not accessible in derived class: Stack
  push(item) {
    this.#storage.push(item);
    console.log(`Frame: ${item} was pushed!`)
    return this.#storage.length;
  }
  pop() {
    if (!this.#storage.length) {
      throw new RangeError("stack is empty; nothing was popped!");
    }
    const popped = this.#storage.pop();
    console.log(`Frame: ${popped} was popped!`);
    return popped;
  }
  print() {
    if (!this.#storage.length) {
      return console.log("the Stack is empty!");
    }
    this.#storage.forEach(frame => console.log(frame));
  }
}

class Stack extends StackPrototype {
  constructor() {
    super();
  }
}

const myStack = new Stack();
(function () { for (let i = 0; i < 10; i += 1) myStack.push(i) })();
(function () { for (let i = 0; i < 5; i += 1) myStack.pop(); })();
myStack.print();

*/


// const Dog = (function () {
//   const privateStaticField = "They're good dogs Brent";

//   Dog.logPrivateStaticField = (function () {
//     console.log(privateStaticField);
//   })();

//   function Dog(name, age) {
//     this._name = name;
//     this._age = age;
//   }

//   Dog.prototype.wag = function () {
//     console.log(`${this._name} just wagged their tail vigorously!`);
//   }

//   return Dog;
// })();

// const rocket = new Dog('Rocket', 1);

// console.log("wag" in rocket, rocket.hasOwnProperty('wag'))


/*

we are to extend an object with contents of other objects

first cache input

next create prototype chain using cached objects as links

return the new "blank" object
*/
// const createLink = function (proto, current) {
//   Object.setPrototypeOf(current, proto);
//   return current;
// }

// links.slice(1).reduce(createLink, links[0]);

// let proto = links[0];
// links.slice(1).forEach(function (link) {
//   Object.setPrototypeOf(link, proto);
//   proto = link;
// });

// return Object.create(links.at(-1));

/*
class MyArray extends Array {
  constructor(name) {
    super();
    this.name = name;
  }

  randomMethod() {
    console.log(this);
  }

  pop() {
    this.push('SYKE!');
    console.log("method overriding!")
  }
}


let jefferyGoliath = new MyArray('jeffery goliath');

jefferyGoliath.push('hi', 'buy', 'see', 'saw');

jefferyGoliath.forEach(el => console.log(el));


console.log(jefferyGoliath.pop());

jefferyGoliath.forEach(el => console.log(el));

const jefferyDavid = (function (name) {
  const MyArray = function (name) {
    Array.call(this);
    this.name = name;
  }

  MyArray.prototype = Object.create(Array.prototype);
  MyArray.prototype.constructor = MyArray;

  return new MyArray(name);
}('jeffery david'));

const MyArray = jefferyDavid.__proto__.constructor;

const larryDavid = new MyArray("larry David");

larryDavid.push(1, 2, 3,);

larryDavid.forEach(el => {
  console.log(el)
});
 */



