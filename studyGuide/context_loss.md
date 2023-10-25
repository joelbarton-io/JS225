# Dealing with Context Loss

## Overview

- **Context loss issues** emerge since JS functions are first-class and as such can be packaged up,passed around, and invoked in different contexts
- **scenarios**

1. [remove a function object from its container](/code_snippets/remove_function_object_from_container.js)

- wherein a `Function` object that is dependent upon the data of its original container where it was defined as a member property is removed from that original container and later invoked elsewhere using a (potentially) different invocation type

```jsx
const container = {
  friendlyGreeting: "Howdy partner!",
  sayHi: function () {
    console.log(`${this.friendlyGreeting}`);
  },
};

const friendlyGreeting = container.sayHi; // property accessor

friendlyGreeting(); // TypeError: tried to access the `sayHi` property of undefined
```

2. [internal `function` "losing" enclosing method's context](/code_snippets/internal_fn_loses_method_ctx.js)

- **issue:** scenario where a method's body encloses a `function` definition and the `function` is later invoked within the scope which that method's invocation introduces -> `this`' value will depend upon how the internal function is invoked (& defined);

```jsx
const container = {
  method: function () {
    console.log(this); // `container`: { method: [Function: method] }
    // `this` doesn't propagate to `internalFn`
    function internalFn() {
      console.log(this);
    }
    // `internalFn` has implicit function execution context
    internalFn(); // `window` or `global` or `undefined` depending on env & if strict mode
  },
};

container.method(); // `method` has implicit method execution context
```

3. [function passed as argument "losing" its context](/code_snippets/fn_passed_as_arg_context_loss.js)

- contingent upon the nature of the function definition since an arrow function wouldn't "lose" its context in the same way a function declaration would, just something to keep in mind!

```jsx
function cb(num) {
  console.log(this); // logs: `undefined` `undefined` `undefined`
  return this + num;
}

const arr = [1, 2, 3];

// cb is invoked via normal function invocation (thus it has implicit function execution context)
let mappedArr = arr.map(cb);
console.log(mappedArr); // logs: [NaN, NaN, NaN]
```

4. function that relies on a direct (read: "named") reference to some context object

- direct reference to some context in a function body might later be out of scope at time of function invocation, later rely on an alias, have had their data garbage collected, or have altered state at time of eventual invocation
- The desired context object is often available when the function object was initially defined and passed

## Solutions to Retain Context

### 1. **Hard Binding**

- this approach defers execution and retains desired context when passing the `function` object around throughout a program
- Utilize `bind` with function expressions (note: not with function declaration syntax).
- Note: You can use `bind` directly with an anonymous function argument in a method.

### 2. **use an arrow function**

- Employ **arrow functions** which base the value of `this` on their surrounding environment's `this` during their definition based; they don't get their "own" `this` binding but rather "inherit" it from their definition's surrounding code

### 3. **Lexical Scoping**

- Retain the context using a local variable: `let self = this;`

### 4. **Indirect Invocation**

- Use `call` or `apply` to explicitly provide the context argument.

# **Insights on Arrow Functions**

- Arrow functions determine `this` based on their surrounding environment during their definition.
  > "The `this` binding for arrow functions is determined by the surrounding environment's execution context at the time of the arrow function's definition."
- They can't be re-binded to a new context object
- they also cannot be invoked as constructors

## Personal Reflections and Observations

- There seems to be a tendency to describe context loss as a scenario where a context object is lost by a function/method, rather than the function/method being dissociated from its context. It's uncertain whether this perspective is a potential comprehension issue or merely a different way of thinking about execution context

## Launch School Phrasing

- LS refers to `this` as a: "context variable"
- "Functions as arguments lose the surrounding context."
- References include "context argument" and "containing object", method "receiver"
