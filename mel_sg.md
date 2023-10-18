# Assessment JS225

## Objects

- [x] **Organizing code into appropriate objects**
  - Objects prevent the application from becoming 1 giant dependency blob
  - Organize related data and code together
  - Useful when a program needs more than one instance of something
  - Becomes more useful as the codebase size increases
- [] **Object factories**

  - Object factories are functions that create & return objects

    ```js
    const createPerson = (firstName, lastName = "") => {
      return {
        firstName,
        lastName,
        fullName() {
          return (this.firstName + " " + this.lastName).trim();
        },
      };
    };
    ```

  - Advantages include:

    - reduces duplicate code
    - limits pollution of the global name space
    - harnesses the powers of closure (private variables/data, encapsulation/privatization of state, both the data and the variables are private)

  - Disadvantages include:

    - extensibility is limited
    - Each object created by the factory function owns the same methods, which can be redundant.

    - There is no way to tell whether an object was created by any given function.

  - commentary:

    - factory functions are great in that they're a really simply, straightforward, "low-tech" OO solution when we need multiply instances of an object. We achieve one of the main benefits of OO (eg. grouping related behavior and data together). They rely on ordinary function invocation and a plain object being returned. They harness the powers of closure while being easy to implement and understand at a glance.

    - The trade-off of simplicity vs. redundancy. If you create a bunch of objects with various properties that are methods, those function objects are duplicated for each individual object. So if we have 1 million objects, each with 1 million methods, then we have a lot of duplicate code which could stretch system resources (?). Assuming we're returning plain objects that inherit directly from Object.prototype, each object owns its functionality. Additionally, plain objects returned by a factory function lack a "type", which can make debugging and thinking about code more challenging for a user of those objects since those objects lack specificity of type.

    - extensibility commentary: Sure we can add methods or fields to the object our FF returned but those changes only apply to that specific object, not other objects that we created via our FF.

## Determining/setting function execution context (this)

- [x] **this**

  - this is the context keyword (which behaves somewhat like a special variable in how we use and reference it) that references the currently executing context object. When outside the scope of a function body this references the global object.

- [x] **Implicit function execution context**

  - This is an execution context that JavaScript _implicitly_ sets

  - Implicitly binds methods invoked in this manner to the owning or calling object

    ```js
    let obj = {
      method() {
        return this;
      },
    };

    let baz = obj.method;

    baz() === obj; // false
    obj.method() === obj; // true
    baz() === window; // true
    ```

- [x] **Explicit function execution context**

  - This is an execution context that you _explicitly_ set

    - `call` or `apply` can change a function's execution context at execution time

      ```js
      let strings = {
        a: "hello",
        b: "world",
        foo() {
          return this.a + this.b;
        },
      };

      let numbers = {
        a: 1,
        b: 2,
      };

      strings.foo.call(numbers); // 3
      ```

      - `call` can also pass arguments to the function:

        `someObject.someMethod.call(context, arg1, arg2, arg3, ...)`

      - `apply` method is identical to `call`, except that it uses an array to pass arguments:

        `someObject.someMethod.apply(context, [arg1, arg2, arg3, ...])`

      - Call: Count the Commas (you have to count the number of arguments to match the called function)

      - Apply: Arguments as Array

- [x] **Dealing with context loss**

  **Method Losing Context when Taken Out of Object**

  ```js
  let greeting = obj.greeting;
  ```

  - Pass the context to a helper function

    ```js
    function repeatThreeTimes(func, context) {
      func.call(context);
      func.call(context);
      func.call(context);
    }
    ```

  - Bind the context to the object

    ```js
    repeatThreeTimes(john.greetings.bind(john));
    ```

  **Internal Function Losing Method Context**

  ```js
  let obj = {
    a: "hello",
    b: "world",
    foo() {
      function bar() {
        console.log(this.a + " " + this.b);
      }

      bar();
    },
  };

  obj.foo(); // => undefined undefined
  ```

  - Solutions:

    - Preserve Context with a Local Variable in the Lexical Scope

      ```js
      let obj = {
        a: "hello",
        b: "world",
        foo() {
          let self = this;

          function bar() {
            console.log(self.a + " " + self.b);
          }

          bar();
        },
      };
      ```

    - Pass the Context to Internal Functions

      ```js
      let obj = {
        a: "hello",
        b: "world",
        foo() {
          function bar() {
            console.log(this.a + " " + this.b);
          }

          bar.call(this);
        },
      };
      ```

    - Bind the Context with a Function Expression

      ```js
      let obj = {
        a: "hello",
        b: "world",
        foo() {
          let bar = function () {
            console.log(this.a + " " + this.b);
          }.bind(this);

          bar();
        },
      };
      ```

  **Function as Argument Losing Surrounding Context**

  ```js
  let obj = {
    a: "hello",
    b: "world",
    foo() {
      [1, 2, 3].forEach(function (number) {
        console.log(String(number) + " " + this.a + " " + this.b);
      });
    },
  };

  obj.foo();

  // => 1 undefined undefined
  // => 2 undefined undefined
  // => 3 undefined undefined
  ```

  - Solutions:

    - Use a local variable in the lexical scope to store this

      ```js
        let self = this;

        foo() {
          [1, 2, 3].forEach(function(number) {
            console.log(String(number) + ' ' + self.a + ' ' + self.b);
          });
        }
      ```

    - Bind the argument function with the surrounding context

      ```js
        foo() {
          [1, 2, 3].forEach(function(number) {
            console.log(String(number) + ' ' + this.a + ' ' + this.b);
          }.bind(this));
        }
      ```

    - Use the optional thisArg argument

      ```js
        foo() {
          [1, 2, 3].forEach(function(number) {
            console.log(String(number) + ' ' + this.a + ' ' + this.b);
          }, this);
        }
      ```

    - Use arrow function for the callback. Arrow functions do not have a `this` binding. Instead of this being dependent on the location of the function invocation, JavaScript resolves it by looking at the enclosing scopes.

      ```js
        foo() {
          [1, 2, 3].forEach((number) => {
            console.log(String(number) + ' ' + this.a + ' ' + this.b);
          });
        }
      ```

## Scope and Closures

- [x] **Creating and using private data**

- at point of definition, functions _enclose_ the local/global variables, function names, etc. in their definition's lexical environment that they need to execute, this is called **closure**

- a closure isn't _just_ the function itself but also the contents of the lexical environment it needs in order to execute as intended. As a metaphor, we can think of a function needing to "box-up" all the information it needs before we can send it off to to the JavaScript engine to execute

  ```js
  function makeCounter() {
    let count = 0; // `count` is private data that will not be accessible
    return function () {
      count += 1; // references count from the outer scope
      console.log(count);
    };
  }
  ```

- compared to pure functions, a function that utilizes closure is more memory-intensive
- the major benefit of closure is _data encapsulation_

- [x] **Garbage collection**

  - Values and references are allocated memory

  - The process of "automatically" freeing memory up is called garbage-collection and applies to _data values_

  - This occurrs when there are no variables, object properties, or function closures that maintain references to the value

    ```js
    function logName() {
      let name = "Sarah"; // Declare a variable and set its value. The JavaScript
      // runtime automatically allocates the memory.
      console.log(name); // Do something with name
      return name; // Returns "Sarah" to caller
    }

    let loggedName = logName(); // loggedName variable is assigned the value "Sarah"
    // the "Sarah" assigned to `loggedName` is NOT eligible for GC
    // the "Sarah" assigned to `name` IS eligible for GC
    ```

  - Theoretically, as long as a function's closure exists, the variables held in the closure remain accessible and as such the data they hold references to is NOT eligible for GC. This could perhaps be confusing since

- [ ] **IIFEs**

  - Immediately Invoked Function Expressions are functions that we define and invoke simultaneously

    ```js
    (function (a) {
      return a + 1;
    })(2);

    let foo = (function () {
      return 10;
    })(); // 10
    ```

  - Because functions create a private scope, IIFE's are great when working in large, poorly maintained code bases. Your variables may clash with other globally scope variables and cause bugs and other undesirable behavior. This is why the new scope is recommended

- [ ] **Partial Function Application**

  - Partial function application uses a function that creates a new function to call a third function that the generator receives as an argument
  - LS example:

    ```js
    function primaryFunction(arg1, arg2) {
      console.log(arg1, arg2);
    }

    function generatorFunction(primary, arg1) {
      return function (arg2) {
        // applicator
        return primary(arg1, arg2);
      };
    }

    let applicatorFunction = generatorFunction(primaryFunction, "Hello");
    applicatorFunction(37.2); // Performs primaryFunction('Hello', 37.2);
    // => Hello
    // => 37.2
    ```

    - PFA using `bind`

    ```javaScript
    const add = (first, second) => first + second;
    const add1 = add.bind(null, 1);
    add1(2);
    ```

    - PFA personal example:

    ```javascript
    // our 'primary' function that will have its arguments supplied over time
    function combine(first, second) {
      console.log(first + second);
    }

    function makeCombiner(combineFunction, first) {
      return function (second) {
        return combineFunction(first, second);
      };
    }
    const combineWords = makeCombiner(combine, "hello");
    // by invoking the applicator, all arguments are now supplied for primary
    combineWords("world");
    ```

## Object creation patterns

- [x] **Constructor functions**

  - Constructors are function intended to be called with the `new` operator but are really just ordinary functions
  - importantly, arrow functions **cannot** be called via constructor invocation

    ```js
    // constructor function
    function Person(firstName, lastName = "") {
      // constructor functions are capitalized
      this.firstName = firstName;
      this.lastName = lastName;

      // instance method
      this.fullName = function () {
        return (this.firstName + " " + this.lastName).trim();
      };
    }

    let john = new Person("John", "Doe");
    let jane = new Person("Jane");

    john.constructor; // function Person(..)
    jane.constructor; // function Person(..)

    john instanceof Person; // true
    jane instanceof Person; // true
    ```

  - the `new` operator

    - A new object is created

    - the constructor's function prototype is set as the new object's `[[Prototype]]`

    - `this` represents the newly created object and also the constructor function's execution context. So, the execution context _is_ the new object

    - The code in the function is executed

    - `this` is returned if the constructor doesn't explicitly return an object

  - Invoking constructor functions without `new` results in `this` being the global object ( assuming function invocation)

- [x] **Prototype objects**

  - Every object (including function objects) has a hidden internal `[[Prototype]]` property

    - "dunder proto" vs `[[Prototype]]`, `__proto__` is a deprecated property but returns the same value as `Object.getPrototypeOf(obj)`

    - points to the object's direct prototype object

    - When we use the `Object.create` method to create an object, it sets the **proto** property of the created object to the object passed in:

      ```js
      let foo = {
        a: 1,
        b: 2,
      };

      let bar = Object.create(foo);
      bar.__proto__ === foo; // true
      // foo is the prototype object
      ```

  - `Object.getPrototypeOf(obj)` to get the prototype object of `obj`

  - `obj.isPrototypeOf(foo)` to check if `obj` is a prototype object of `foo`

  - `Object.create` can be used for prototype chains with `Object.prototype` being the prototype of the original object (foo)

    ```js
    let foo = {
      a: 1,
      b: 2,
    };

    let bar = Object.create(foo);
    let baz = Object.create(bar);
    let qux = Object.create(baz);

    Object.getPrototypeOf(qux) === baz; // true
    Object.getPrototypeOf(baz) === bar; // true
    Object.getPrototypeOf(bar) === foo; // true

    foo.isPrototypeOf(qux); // true - because foo is on qux's prototype chain
    ```

- [x] **Behavior delegation**

  - Objects can be created directly from other objects and behaviors (methods) can be shared via the prototype chain

    ```js
    let dog = {
      say() {
        console.log(this.name + " says Woof!");
      },

      run() {
        console.log(this.name + " runs away.");
      },
    };

    let fido = Object.create(dog);
    fido.name = "Fido";
    fido.say(); // => Fido says Woof!
    fido.run(); // => Fido runs away.
    ```

  - **Behavior Delegation**

    - Objects on the bottom of the prototype chain can "delegate" requests to the upstream objects to be handled

    - `hasOwnProperty` tests if a property is defined on the object itself

    - `getOwnPropertyNames` returns an array of an object's own property names

    - Objects can override default behaviors by adding instance properties with the same name as the default behavior and define the specific behavior they'd like to implement

    - additionally, we can invoke the desired behavior via the instance and use indirect invocation to also execute the default behavior

    - It doesn’t matter if properties are added to an object’s prototype chain after the object has been created - the inheriting object will look for methods at execution

    ```js
    var animal = {};
    var dog = Object.create(animal);
    var terrier = Object.create(dog);

    dog.speak = function () {
      console.log("Woof Woof");
    };

    terrier.speak(); // "Woof Woof"
    ```

- [x] **OLOO and Pseudo-Classical patterns**

  - **OLOO (Objects Linking to Other Objects)**

    - Define the shared behaviors on a prototype object, then use Object.create to create objects that delegate directly from that object

    ```js
    let Point = {
      // capitalized name for the prototype as a convention
      x: 0, // default value defined on the prototype
      y: 0,

      onXAxis() {
        // shared methods defined on the prototype
        return this.y === 0;
      },

      onYAxis() {
        return this.x === 0;
      },

      distanceToOrigin() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      },

      init(x, y) {
        // optional init method to set states
        this.x = x;
        this.y = y;
        return this;
      },
    };

    let pointA = Object.create(Point).init(30, 40);
    let pointB = Object.create(Point);

    Point.isPrototypeOf(pointA); // use isPrototypeOf to check type
    Point.isPrototypeOf(pointB);
    ```

  - **Pseudo-Classical**

    - Combination of the constructor pattern and the prototype pattern

    ```js
    let Point = function (x = 0, y = 0) {
      // capitalized constructor name as a convention
      this.x = x; // initialize states with arguments
      this.y = y; // 0 as default value
    };

    Point.prototype.onXAxis = function () {
      // shared behaviors added to constructor's prototype property
      return this.y === 0;
    };

    Point.prototype.onYAxis = function () {
      // these methods are added one by one
      return this.x === 0;
    };

    Point.prototype.distanceToOrigin = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    let pointA = new Point(30, 40); // use new to create objects
    let pointB = new Point(20);

    pointA instanceof Point; // use instanceof to check type
    pointB instanceof Point;
    ```

## Prerequisites

- [x] **let & const**

  - `let`

    - Allows variables to be reassigned

  - `const`

    - Cannot be reassigned, only mutated (properties of an object or elements of an array)

  - `let` & `const`

    - Are not hoisted

      - Technically, they are hoisted but not initialized so they behave as if they are not hoisted

    - Block-scoped instead of `var` which is function-scoped

      ```js
        // { } defined a new block
        if (something) {
          // Block 1
        } else {
          // beginning of Block 2
          while {
            // Block 3 (this block is nested inside of block 2)
          } // end of Block 2
        }
      ```

- [x] **Arrow Functions**

  - Type of anonymous function

  - Determine the value of `this` lexically instead of using the invocation syntax

  - Recommended to use primarily for callback functions

    - Should not use arrow functions as callbacks when the invoking function may set the value of this

  ```js
  // ES5
  var multiplyES5 = function (x, y) {
    return x * y;
  };

  // ES6
  const multiplyES6 = (x, y) => x * y; // return & { } aren't neccessary when arrow functions are 1 liners
  const multiplyByTenES6 = (x) => x * 10; // () aren't neccessary when only 1 parameter is declared
  ```

- [x] **Concise Property & Concise Method Syntax**

  - Syntaxical sugar

    ```js
    // ES5
    function foo(bar) {
      return {
        bar: bar,
        qux: function () {
          console.log("hello");
        },
      };
    }

    // ES6
    function foo(bar) {
      return {
        bar, // same as bar: bar - Concise Property Syntax
        qux() {
          // same as qux: function() - Concise Method Syntax
          console.log("hello");
        },
      };
    }
    ```

- [x] **Strict Mode**

  - Use strict mode in any new code that you write

  - Eliminates some silent errors that occur in sloppy mode by changing them so that they throw errors instead

  - Prevents some code that can inhibit JavaScript's ability to optimize a program so that it runs faster

  - Prohibits using names and syntax that may conflict with future versions of JavaScript

  - How to enable: Add `"use strict"` to the top of a file

  - `this` in the global scope is `undefined`

  - Does not allow assigning variables that are not declared

    - Js will make a global variable for undeclared variables in sloppy mode

    ```js
    "use strict";

    function foo() {
      bar = 3.1415; // ReferenceError: bar is not defined
    }

    foo();
    ```

  - Using function call syntax on a method sets this to undefined

    ```js
    "use strict";

    let obj = {
      a: 5,
      go() {
        this.a = 42; // TypeError: Cannot set property 'a' of undefined
      },
    };

    let doIt = obj.go;
    doIt();
    ```

  - Lexically scoped

    ```js
    function foo() {
      "use strict";
      // All code here runs in strict mode
    }

    function bar() {
      // All code here runs in sloppy mode
      foo(); // This invocation is sloppy mode, but `foo` runs in strict mode
      // All code here runs in sloppy mode
    }
    ```

- [x] **Class Syntactic Sugar**

  - Es6 introduced the `class` keyword

  - Syntactic sugar that wraps around one of the object creation patterns

  - All methods defined within the class definition, with the exception of `constructor`, are defined on the prototype object. In this case, on Point.prototype

  - **Caveats**

    - All code in `class` executes in strict mode

    - Class declarations are not hoisted. Instaniating an object above the class declaration will result in a ReferenceError

    - Invoking a class constructor without the keyword `new` will result in an error

    ```js
    // Es5 Pseduo-classical pattern
    function Point(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }

    Point.prototype.onXAxis = function () {
      return this.y === 0;
    };

    Point.prototype.onYAxis = function () {
      return this.x === 0;
    };

    Point.prototype.distanceToOrigin = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    // Es6 class syntacial sugar
    class Point {
      constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
      }

      onXAxis() {
        return this.y === 0;
      }

      onYAxis() {
        return this.x === 0;
      }

      distanceToOrigin() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
    }
    ```

- [x] **Object Destructuring**

  ```js
  let obj = {
    foo: "foo",
    bar: "bar",
    qux: 42,
  };

  // ES5
  let foo = obj.foo;
  let bar = obj.bar;
  let qux = obj.qux;

  // ES6
  let { foo, bar, qux } = obj;
  ```

- [x] **Array Destructuring**

  ```js
  let foo = [1, 2, 3];
  // ES5
  let first = foo[0];
  let second = foo[1];
  let third = foo[2];
  // ES6
  let [first, second, third] = foo;

  let bar = [1, 2, 3, 4, 5, 6, 7];
  let [first, , , fourth, fifth, , seventh] = bar;
  ```
