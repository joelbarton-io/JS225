# **Lexical scope**

_"Lexical"_

> _"refers to the structure of the surrounding code without regard to its execution state;"_

_"Scope"_

> _"the context in which an identifier exists and can be accessed or modified"_

## **applied to functions**

- all functions in javascript abide by two lexical scoping rules:

  1. they have access to any variables defined in the scope they introduce

  2. they can access any variables that were in scope based on the variable environment wherein they were **defined** (via closure and normal lexical scoping behavior)

- an arrow function determines its execution context based on the value of `this` in the
  enclosing _lexical scope_ of its definition at the **time** of definition
  - this is not to say an arrow function gets its execution context lexically since functions don't have execution context pre-execution
  - I believe it can be argued that arrow functions have implicit function execution context since:
    1. we the developer cannot configure their ec via either `bind` or indirect invocation and,
    2. they dont have their own `this` binding but instead "inherit" the context binding of their definition's immediate enclosing scope at _time of definition_

## **applied to variable lookup**

- since the "visibility" of a variable is dictated by source code, when JS tries to resolve a variable, how our code is written determines the path that JS takes through the various nested variable scopes

- the concept of a 'scope chain' outlines the actual "path" that JS takes to resolve a variable reference; so when we talk about "enclosing" scopes, the 'links' of this 'chain' are really just various lexical environments
