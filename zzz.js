class Dog {
  constructor(name) {
    this.name = name;
  }
}

function Cat(name) {
  this.name = name;
}

console.log(Dog);
/*
I'm re-reading the section on class syntactic sugar and some questions are surfacing that I'd love to get some feedback on.

In the below code example, would it e encouraged to delineate between `Cat` and `Dog`'s differing syntax with how we talk about them?
  It is plain to see that `Cat` is a function defined to be invoked as a constructor whereas, `Dog`'s `class` syntax
  somewhat obfuscates the underlying constructor pattern.  My question is:
  How important is it to delineate between the two syntaxes since, under the hood (at least as far as we are concerned), both
  use plain constructors?  e.g: to reference the `Dog` constructor, should I say, "the `Dog` _class_ constructor method" or simply refer to
  it as the "`Dog` constructor function"?
*/