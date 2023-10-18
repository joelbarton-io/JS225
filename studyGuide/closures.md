# Closure

## Commentary

> _"closure is a lexical concept"_;

- where a function is _defined_ is what matters for its closure binding;
- where a function is _invoked_ is **not important** for its closure binding;
- thus, _"Even if you never call a particular function, that function forms a closure with its surrounding scope"_

## _What is a closure?_

- a closure can be thought of as either:
  1. a _single_ entity that combines a function definition and the enclosing lexical environment of the definition, OR
  2. an _envelope_ object that is _attached_ to the function object itself when the function is defined
  - this _attachment_ occurs during the creation phase, this is part of why we describe closure as a _lexical concept_ and not a _runtime concept_

## _What is *in* a closure?_

- pointers that point at _the variables_ themselves that a function needs (the identifiers it _uses_ inside the function body itself)
- a closure's pointers reference the identifiers themselves: local variables, function/class name variables, etc.

## _When is a closure created?_

- a closure is create at the point in time when a function is **defined**

## _What is the relationship between closures and scope?_

- closure and scope are both lexical concepts
- the variables in scope at the time of a function's definition determine the content of that function's closure

## _What do we mean when we say that closures are defined lexically?_

- closures are said to be **defined** (generated?) lexically because the _location_ in the actual source code where the closure is **generated** (defined?) determines what variables are visible to that closure

## _What is partial function application?_
