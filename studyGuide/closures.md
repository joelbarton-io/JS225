# Closure

## Commentary

> _"closure is a lexical concept"_;

- where a function is _defined_ is what matters for its closure binding;
- where a function is _invoked_ is **not important** for its closure binding;
- thus:
  > "Even if you never call a particular function, that function forms a closure with its surrounding scope"\_

## _What is a closure?_

- a closure can be thought of as either:
  1. a _single_ entity that combines a function definition and the enclosing lexical environment of the definition, OR
  2. an _envelope_ object that is _attached_ to the function object itself when the function is defined
  - not sure about what I think of this next part:
    - this _attachment_ occurs during the creation phase, that's part of why we choose to describe closure as primarily a _lexical concept_ since the contents of a closure rely on lexical scope and since scope exists pre-execution, so too does the link

## _What is *in* a closure?_

- pointers that point at _the variables_ themselves that a function needs (e.g the identifiers a function needs to work correctly)
- a closure's pointers reference the identifiers themselves: local and globalvariables, function/class name variables, etc.
- this _reference-to-variable-reference_ concept is what facilitates the ability to not only "remember" a previous--and possibly destroyed--lexical environment (where some a variable existed) but also appraise a variable's state over the course of a program's runtime once the thread of execution has left the function definition's execution context

## _When is a closure created?_

- a closure is created at the point in time when a function is **defined**

## _What is the relationship between closures and scope?_

- closure and scope are both lexical concepts
- the variables in scope at the time of a function's _definition_ determine the content of that function's closure
- the lexical environment where a function is invoked has no bearing on the contents of a function's closure (unless the invocation and definition environment is the same, but the point still holds; it's all about the definition)

## _What do we mean when we say that closures are defined lexically?_

- closures are said to be **defined** (generated?) lexically because the _location_ in the actual source code where the closure is **generated** (defined?) determines what variables are visible and thus a avaiable to be closed-over by the closure itself

## _What is partial function application?_

- the process of applying some # of arguments to a function that can later be passed additional arguments upon invocation
- PFA necessitates a reduction in function arguments
- we use a function to produce another function with a smaller arity that we can invoke later

  > very useful pattern when we need to call a function multiple times with the same argument(s)
