# Dealing with Context Loss (parts 1-3)

## Overview

- **Context loss issues** can emerge when:
  - Function objects which are dependent upon a context object are passed around (e.g they reference `this` in their body)
  - a context object: direct references might later be out of scope, be garbage collected, or have its state altered.
  - The desired state is often when the function object was initially shared or declared.

## Solutions to Retain Context

### 1. **Hard Binding**

- Defer execution and retain the context by using hard binding when passing the function object.

### 2. **Methods with Internal Functions**

- Explicit context in a method invocation doesn't propagate to enclosed functions.
- **Issue**: If the internal function is dependent on `this` and is invoked without a specific context, it defaults to the global context (`window` in Browsers or `globalThis` in Node.js).

  - **Solutions**:
    1. **Lexical Scoping**: Retain the context using a local variable: `let self = this;`
    2. Use `call` or `apply` to explicitly provide the context argument.
    3. Utilize `bind` with function expressions (not with declarations). Note: You can use `bind` directly with an anonymous function argument in a method.
    4. Employ **arrow functions**: They base the value of `this` on their surrounding environment during their inception.

### 3. **Insights on Arrow Functions**

- Arrow functions determine `this` based on their surrounding environment during their creation.
  > "The `this` binding for arrow functions is determined by the surrounding environment's execution context at the time of the arrow function's definition."
- They can't be re-binded to a new `this`.

## Personal Reflections and Observations

- There's a tendency to describe context loss as a context object being lost by a function/method, rather than the function/method being dissociated from its context. It's uncertain whether this perspective is a potential comprehension issue or merely a different viewpoint.

## Launch School Phrasing

- LS refers to `this` as a: “context variable”
- "Functions as arguments lose the surrounding context."
- References include "context argument" and "containing object."
