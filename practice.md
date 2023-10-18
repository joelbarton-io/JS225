```javascript
let obj = {
  count: 2,
  method() {
    return this.count;
  },
};

obj.method();
```

- When we invoke the function object referenced by the `method` prop on `obj`
  on line 8, `this` points at the function's receiver, which is the Object
  literal spanning lines 1-6 that the local variable `obj` holds a reference to.

```javascript
function foo() {
  console.log(this.a);
}

let a = 2;
foo();
```

- when we invoke `foo()`, the function's context is `undefined` since that is the
  implicit global object when the `use strict` directive is applied. Thus when
  `console.log(this.a)` executes a `TypeError` is thrown as we can't read properties
  of `undefined`.

```javascript
let a = 1;
function bar() {
  console.log(this.a);
}

let obj = {
  a: 2,
  foo: bar, // prop `foo` holds the same ref to function obj as held by `bar`, they both point at the same function object
};

obj.foo();
```

```javascript
let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count; // that is this? -> `myChildObject`
    },
  },
};

myObject.myChildObject.myMethod();
```

- the execution context of `myMethod` is the object which the
  `myChildObject` property holds a reference to.
- The method returns `undefined` since the `myChildObject` doesn't
  have a property named `count`.

```javascript
let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    // total's EC: `computer`
    let tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        // window.price is undefined -> undefined > 20000 -> false
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount.call(this); // specialDiscount's EC: window
  },
};

console.log(computer.total()); // 35_000 where as it should be 34_000
/*
object `computer`
has some properties
one of which holds a method
inside `total`...
local var `tax` is declared and init

      function `specialDiscount` is defined

      later an expression is evaluated and returned
        inside expression, `specialDiscount` is invoked [implicit] function execution context

*/
```

```javascript
function makeHello(names) {
  return function () {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);
/*
Upon invocation of `makeHello`, local var `names` holds a reference to the array
["Steve", "Edie"].

Since the returned anon function uses the `names` local variable in its function
body, `names` is part of the returned anon function's closure.  One line 7, variable:
`helloSteveAndEdie` is declared and initialized to the value of this anon function.
Thus, so long as the global variable `helloSteveAndEdie` is not reassigned to a
different value, the array referenced by the `names` variable will not be eligible
for GC until the program exits and JS can GC the anon function, refed by helloSteveAndEdie.
This is true since the contents of a closure persist as long as the function which created
that closure exists.  Once the function is no more, the contents of its closure is released,
assuming no other references exist for said contents (data).
*/
```

```javascript
let myNum = 1; // primitive data so never eligible during program execution

function foo() {
  let myArr = ["this is an array"];
  // what is eligible for GC here?
}

foo();

// what is eligible for GC here?

/*
Since the primitive value 1 assigned to the local variable myNum is a primitive
and as such is stored on the stack, it is not GC'ed prior to the program exiting.

Upon invocation of `foo`, the function scoped local variable `myArr` holds a reference
  to the array ['this is an array'].  Once `foo` finishes executing, that array Object
is eligible for GC since there are no more variables that hold references to it.

  The array is eligible for GC as soon as `foo()` exits. */
```

```javascript
function makeGreeting() {
  let foo = { greeting: "hello" }; // <-
  return function (name) {
    foo.name = name;
    return foo;
  };
}

let greeting = makeGreeting();

// is the object eligible for GC here? <- eligible?

// more code

/*
fn declaration

local var declaration & initialization

upon invocation of makeGreeting (inside the function's scope...):
  - function-scoped local var `foo` declared and init to object.
  - makeGreet returns anon function whose closure contains the
    local variable `foo` and necessarily persists the data (the object)
    that `foo`'s reference points at.
  - upon execution and return of `makeGreeting()` the global scoped local
    variale `greeting` holds a reference to the returned anon function.
*/
```

```javascript
function partial(func, first) {
  return function (second) {
    return func(first, second);
  };
}

function greet(greeting, name) {
  let capitalized = greeting[0].toUpperCase() + greeting.slice(1);
  let message = capitalized + ", " + name + "!";
  console.log(message);
}

const sayHello = partial(greet, "herro");

const sayHi = partial(greet, "hiyaa");

sayHello("world");

sayHi("sara san");
```

```javascript
function subtract(a, b) {
  return a - b;
}

function makeSub(func, toSubtract) {
  return function (baseValue) {
    return func(baseValue, toSubtract);
  };
}

const sub5 = makeSub(subtract, 5);

sub5(10); // 5
sub5(20); // 15
```

```javascript
function newStack() {
  let fakeStack = [];
  return {
    push(val) {
      fakeStack.push(val);
    },
    pop() {
      return fakeStack.pop();
    },
    printStack() {
      fakeStack.forEach((val) => {
        console.log(val);
      });
    },
  };
}

let stack = newStack();

stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);

console.log(stack.pop());

stack.printStack();
```

```javascript
const greeter = (function () {
  const name = "Naveed";
  const greeting = "Hello";

  return {
    message: `${greeting} ${name}!`,
    sayGreetings() {
      console.log(this.message);
    },
  };
})();

greeter;
```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript
function a() {};

(function b() {
  c = 'a global value';
  function e() {};
})();

const hello = "not a global value"; // a global variable

d = "another global value";

if (true) {
  function f() {
    return function g() {};
  };
}



this.a;     // ƒ a() {}                  global
this.c;     // 'a global value'          global
this.hello; // undefined                 not global
this.d;     // 'another global value'    global
this.e;     // undefined                 not global
this.f;     // ƒ f() {}                  global
let g = this.f();   // undefined

this.g;     // undefined                 not global (local to the scope of f's function body)
g();

```

```javascript

```

```javascript

```

```javascript

```
