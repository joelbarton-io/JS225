# OLOO

> "objects linking other objects"

- one of the two "JavaScript best practices" approaches to implementing inheritance and behavior sharing in JS
- a very straight-forward way to implement prototypal inheritance
- sheds the pretense of "classes" and instead just uses objects (no constructor functions) + `Object.create()` + `init`
- a key behavioral difference to keep in mind when moving between oolo and prototype + constructor or pseudo-classical `class` pattern is that the `init` method we define when using oolo does NOT implicitly return the value of `this` like the other two approaches and as such we must explicitly return the created instance
