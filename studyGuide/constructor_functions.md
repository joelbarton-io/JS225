# constructors

- everytime we invoke a function as a constructor, JS creates objects that link to that constructor's function prototype, this is how we set up behavior delegation for those create objects

## instances

- individual objects of a specific type (think: `Dog` is `rascal`'s type)
- the term can be used to describe objects create via the prototype pattern (via constructors) or the factory function pattern, so long as we are defining _multiple_ objects of the same _kind_

## instance properties

- properties of a _specific instance_ (e.g a dog instance's `weight`)

## instance methods

- "Any method defined in any prototype in the prototype chain of an instance is considered to be an instance method of the instance."

## static properties/methods
- defined on the constructor function itself (e.g a dog's species applies to all dogs (instances of Dog))