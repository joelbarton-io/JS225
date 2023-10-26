# pseudo-classical pattern

- a combination of the **_prototype_** and **_constructor_** patterns of object creation

- required components:
  1. a function meant to be invoked as a constructor (`new`)
  2. instance methods defined on the constructor's _function prototype_
  3. instance data properties defined and initialized on `this` assigned during constructor invocation (e.g inside the constructor's function body)

## stylistic convention

- constructor functions are written with a capitalized first chr: `function Dog() {}`
- can prepend properties we don't want modified with an underscore: `_name`; purely stylistic and has no bearing on actual privacy

## notes:

- we can reassign the `prototype` property of our `Constructor` but always remember to also add the `constructor` prop to the function prototype
- reassigning a constructor's `prototype` property can be treacherous for a number of reasons (disinheriting pre-existing instances, forgetting to add the `constructor` property, etc.) and isn't possible using the `class` syntactic sugar
