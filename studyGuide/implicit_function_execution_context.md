## Implicit Execution Context

- “First-class Functions initially have no context; they receive one when the program executes them.”
- “The behavior for the `var` variable appears to be identical to what happens when you don't declare the variable. There's a subtle but significant difference, however: you can delete global variables that you don't declare, but not those that you did.”
- ”In strict mode, the global object is not used as the implicit context. Instead, the implicit context is `undefined`.”
- ”In strict mode, using variables that have not been previously declared is not allowed.”
- A variable initialized but undeclared in a function scope (assuming the function is executed) will become a property on the global object without strict mode enabled.
- **Method**: where an object property happens to reference a function object
- when a method has implicit method execution context, the execution context resolves implicitly to the method's calling object or _receiver_
- Implicit function execution context is the global object or `undefined`, depending on if strict mode is enabled or not.
- Arguments object being available for every function’s arguments isn’t used much in modern javascript and is typically replaced with the spread operator syntax.
- Whether a function/method is invoked as a function or as a method determines its execution context.

### Observations & Reflections on Implicit Context:

- Implicit method execution context vs implicit function execution context: Is there a difference in behavior? It seems redundant since method invocation appears to set the context explicitly.
- **Launch School (LS) advice**: "just relax, things will make more sense by next module."
- It seems like LS uses terms: calling object and execution context interchangeably.
- On page 7 of this module, LS says, “context object” combining the two terms.
- **Important**: “The execution context is determined by how you invoke a function or method. We can't emphasize this enough. `this` is the way.”
