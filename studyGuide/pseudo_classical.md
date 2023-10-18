# pseudo-classical pattern

- a combination of **_prototype_** and **_constructor_** patterns

- required components:
  1. a function meant to be invoked as a constructor (`new`)
  2. instance methods defined on the constructor's _function prototype_
  3. instance data properties defined and initialized on `this` assigned during constructor invocation (e.g inside the constructor's function body)
