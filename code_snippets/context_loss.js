// Internal Function Losing Method Context
const obj1 = {
  prop: 13,
  method() {
    console.log(`this in the method: ${this}`);
    function func() {
      console.log(`this in the function: ${this}`);
    }
    func();
    return this;
  },
};

// because extracted from containing object
const obj2 = {
  prop: 13,
  method() {
    console.log(this);
  },
};

// function passed as argument to another fn
const obj3 = {
  a: "hello",
  b: "world",
  foo() {
    [1, 2, 3].forEach(function (number) {
      console.log(String(number) + " " + this.a + " " + this.b);
    });
  },
};

obj3.foo();

/*
solutions:
1. bind, call, apply
2. variable reference to desired context accessed
3. utilize the `thisArg` in a higher order function
4. pass the desired context object to the function
*/


