# to focus on re: language and how to answer questions...

- Always identify side-effects and explain the causal mechanism when asked questions like, _"what does the following code do?"_

  - side-effects include what is logged, what is mutated, what variables are reassigned, what is GC-ed etc.

- Always make note of implicit or explicit return values when dealing with functions, especially constructors

- use the phrasing in the question in the answer to make it easy to identify if any aspects of the question havebeen left unanswered

- When JavaScript tries to resolve a _variable reference_ it first searches the currently executing
  function scope and then the function's closure, then lexical scope where the currently-
  executing function was _defined_ and onwards it goes. This applies to all function definition types:
  (i.e function declaration, function expression, anonymous functions, arrow functions)

- focus on variables/identifiers/object properties wrt closure and Garbage collection

- the questions that they ask won't be too wierd or niche in nature
