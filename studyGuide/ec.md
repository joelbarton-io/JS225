# Function Execution Context and `this`

## Execution Context

- **Definition**: the context in which a function is evaluated during execution
- functions initially **lack** context.
- they receive context **upon invocation**, thus it can be said that a function's execution context is determined by _how_ it is invoked (1 of 4 possible ways)

- the concept of an "execution context" involves information about 2 things: a variable environment and a `this` binding which references the context object of the currently-executing code being evaluated

## `this`

- `this` is a keyword that references the executing code's context
- `this` is also referred to by LS as the "_context variable_"
- `this` behaves similarly to a variable in that it dynamically references the "context object" of an executing function, method, or module (file)
- `this`' value depends on if it was used inside/outside the scope introduced by an executing function and, if inside a function, upon how that enclosing function was defined (arrow functions) or (most importantly) invoked (constructor invocation, method invocation, function invocation, indirect invocation).

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
     - Using `bind` to create a function with a context configured prior to invocation then invoking with any invocation type _other_ than constructor

### Special Note on Arrow Functions

- Arrow functions do not possess their own `this` binding
- they inherit `this` (and thus, receive their e.c. implicitly?) from the enclosing lexical scope _where_ they are defined at the _time_ of said definition

> "the value of this when using an arrow function is the current value of this in the calling function"

- note: the execution context of an arrow function is **not** determined "lexically"; since `this`' value depends on both a program's state at time of definition + the lexical scope of the definition at time of definition

### Special note on scope vs execution context (`this`)

- the rules which govern `this` are **distinct** from the rules that govern variable scope

### Key Takeaway

- we can think of execution context as both a context object and the executing code's variable environment
- being able to track and understand execution context is extremely important in JS since JS functions are _first class_ and as such can _pass through_ and execute in different contexts throughout a program's
