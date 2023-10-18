# Higher Order Functions

Higher order functions have a distinctive characteristic: they can both **accept** functions as arguments and **return** function objects.

## Distinct Characteristics

### Function as First Class Citizens:

- This concept is exclusive to the realm of programming languages.
- In languages where functions are first class, they can:

  - Be passed as arguments.
  - Be returned by other functions.
  - Be assigned as values to variables.

- We can invoke functions in a scope that's different from where it was originally defined.

## Correlation of concepts: first class functions & higher order functions

The presence of first-class functions in a language often implies the existence and frequent usage of higher order functions. These concepts are closely intertwined.

- A language's support for first-class functions is a **property** of that language.
- Whether a function is "higher order" depends on its **individual characteristics**.

## Personal Observations

- **Note**: Struggled with exercise 5 in the practice problems.

- While higher-order functions and closures often come up in the same discussions, it's crucial to realize they can stand apart. For instance:
  - A closure encapsulating private data can be crafted without a higher-order function (ex. when a function returns an object containing a method that references a variable within the outer function's scope);

## Method define dusing Arrow syntax passed to a higher order function

- the below demonstrates a potential pitfall of using an arrow function as a property on an object and used as a higher order function’s callback

```jsx
let object = {
  exponent: 2,
  arrow: (num) => {
    // E.C. determined by value of `this` in enclosing lexical scope of `arrow`'s DEFINITION
    return Math.pow(num, this.exponent);
  },
  normal: function (num) {
    // E.C. determined by how `normal` is INVOKED
    return Math.pow(num, this.exponent);
  },
};
let arr = [1, 2, 3];
let ctx = { exponent: 20 };

arr.map(object.arrow, object); // [NaN, NaN, NaN]
arr.map(object.arrow, ctx); // [NaN, NaN, NaN]
arr.map(object.normal, ctx); // [1, 1048576, 3486784401
arr.map(object.normal, object); // [1, 4, 9]
```

- Notes:
  - the behavior of the arrow function's static scoping (eg. what `this` is) is fairly diverse across various environments
  - don't use the arrow syntax when defining methods on objects
  - pay close attention to the enclosing lexical scope of arrow functions
