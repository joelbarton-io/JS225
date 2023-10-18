# Dealing with Context Loss

## Overview

- **Context loss issues** emerge since JS functions are first-class
- **scenarios**
  - A Function object that is dependent upon a context object are passed around (e.g they reference `this` in their body)
  - direct references might later be out of scope, have had their data garbage collected, or have altered state by the time of invocation
  - The desired context object is often available when the function object was initially shared or defined.

## Solutions to Retain Context

### 1. **Hard Binding**

- this approach defers execution and retains desired context when passing the function object around throughout a program

### 2. **Methods which define Internal Functions**

- since the execution context in a method invocation doesn't propagate to enclosed functions, issues will arise:
- **Issue**: If an internal function relies on `this` and is invoked without a specific context or not defined using the arrow syntax, defaults to the global context (`window` in Browsers or `globalThis` in Node.js).

  - **Solutions**:
    1. **Lexical Scoping**: Retain the context using a local variable: `let self = this;`
    2. Use `call` or `apply` to explicitly provide the context argument.
    3. Utilize `bind` with function expressions (not with declarations). Note: You can use `bind` directly with an anonymous function argument in a method.
    4. Employ **arrow functions** which base the value of `this` on their surrounding environment's `this` during their definition; they don't get their own `this` binding

### 3. **Insights on Arrow Functions**

- Arrow functions determine `this` based on their surrounding environment during their definition.
  > "The `this` binding for arrow functions is determined by the surrounding environment's execution context at the time of the arrow function's definition."
- They can't be re-binded to a new `this`.
- they also cannot be invoked as constructors

## Personal Reflections and Observations

- There seems to be a tendency to describe context loss as a scenario where a context object is lost by a function/method, rather than the function/method being dissociated from its context. It's uncertain whether this perspective is a potential comprehension issue or merely a different viewpoint.

## Launch School Phrasing

- LS refers to `this` as a: “context variable”
- "Functions as arguments lose the surrounding context."
- References include "context argument" and "containing object", method "receiver"
