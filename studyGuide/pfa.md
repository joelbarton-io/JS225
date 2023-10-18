# Partial Function Application

- a technique that involves producing a new function by applying some of the arguments of the original function.

## Core Principles

1. **Structure**: commonly uses (3) functions: **generator**, **applicator**, and **primary**.
   - **generator**: Receives some of primary’s arguments and returns the applicator function.
   - **applicator**: Captures some of its arguments when the generator function is invoked. This function funnels all the arguments supplied at various stages to the primary.
   - **primary**: Invoked by the applicator function with all the arguments.
2. **Structure**: we can also use `bind` to partially apply a function's arguments; this only requires (2) functions

- `bind` allows arguments to be passed at the time of the `bind` method invocation, then later the function object could be invoked and passed more arguments

## Role of Closures

- [closure definition](./closures.md)
- **Functionality**: Closure facilitate the packaging together of private data and variables with functionality that uses that private data/variables. The data of the closure can only be accessed with the returned function object which created the closure.

## Insights & Examples

- **Standard Language**: LS frequently mentions variables and their values being accessible "THROUGH A CLOSURE or VIA CLOSURE".
- It seems when a new function is created, it maintains a reference to the variables it uses not just in the immediate enclosing scope of the new function but all enclosing scopes.

### general purpose partial function application example:

```jsx
function partial(primary, first) {
  return function (second) {
    return primary(first, second);
  };
}
const add = (a, b) => a + b;
const add1 = partial(add, 1);
add1(2); // -> 2
```

```javascript
function outerFunction(b) {
  // also enclosing scope of returned function
  function c() {
    let e = null;

    // enclosing scope of returned function
    return function () {
      // retains access to vars `e` and `b` through closure
      console.log(b);
      return e;
    };
  }

  return c(b);
}

let myFn = outerFunction("hi there");

myFn();
```
