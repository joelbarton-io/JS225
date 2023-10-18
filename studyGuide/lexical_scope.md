# **Lexical scope**

_"Lexical"_

> _"refers to the structure of the surrounding code without regard to its execution state;"_

_"Scope"_

> _"the context in which an identifier exists and can be accessed or modified"_

## **applied to functions**

- all functions in javascript abide by lexical scoping rules:

  1. have access to any variables defined in the scope they introduce (inside function body)

  2. can access any variables that were in scope based on the context where the function was **defined** (via closure and lexical scope)

- an arrow function determines its execution context based on the value of `this` in the
  enclosing _lexical scope_ of its definition at the **time** of definition
  - this is not to say an arrow function gets its execution context lexically; functions don't have execution context pre-execution

## **applied to variable lookup**

- since the "visibility" of a variable is dictated by source code, when JS tries to resolve a variable, how our code is written determines the path that JS takes through the various nested variable scopes
