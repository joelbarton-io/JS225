# Function Execution Context and `this`

## Understanding Execution Context

- **Definition**: the context in which a function is evaluated during execution
- functions initially **lack** context.
- they receive context **upon invocation**, thus a function's execution context is determined by _how_ it is invoked\*

## `this`

- `this` is the context keyword
- behaves like a dynamic variable in that it references the "context object" of an executing function or method when referenced inside said function body
- `this`' value depends on if it was used inside/outside the scope introduced by an executing function and, if inside a function, upon how that enclosing function was defined (arrow functions) and invoked (constructor invocation, method invocation, function invocation, indirect invocation).

### Types of Context Setting

> _"explicit function execution context, implicit function/method execution context"_

1. **Implicit Context Binding**: JavaScript automatically determines the context.

   - **Examples**:
     - Regular function invocation: `functionName()`
     - Method invocation: `obj.method()`
     - Constructor invocation: `new Constructor()` (`()` is optional if not initializing any instance properties)

2. **Explicit Context Binding**: Developers explicitly set the context.

   - **Examples**:
     - Indirect invocation using methods like `call` and `apply`.
     - Using `bind` to create a function with a context configured prior to invocation

### Special Note on Arrow Functions

- Arrow functions do not possess their own `this` binding.
- they inherit `this` (and thus, receive their e.c.) from the enclosing lexical scope where they are defined at the time of their definition (`this` is not determined "lexically")

### Key Takeaway

- different execution contexts exist and are often represented by objects
- all functions execute "within" these context objects
- being able to track and understand execution context is extremely important in JS since JS functions are _first class_ and as such can _pass through_ and execute in different contexts throughout a program
