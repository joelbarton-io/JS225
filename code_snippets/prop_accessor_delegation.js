class Dog {
  constructor(name) {
    this.name = name;
  }
}

const dogConstructorFunction = Dog.constructor; // extract `constructor`
console.log(dogConstructorFunction); // ?

/*
Question:
  "We'd like to extract the `Dog` class' `constructor` method defined on lines 2-4.
  Are we successful in this task on line 7?  Why or why not?"

Answer:
  The code doesn't achieve what we want as evidenced from what line 8 prints (`Function`).
  On line 7 when we access the `constructor` property of the `Dog` class (itself a function object),
  the Javascript engine starts by searching `Dog` for a property named `constructor`.
  When the engine doesn't find `constructor` on `Dog`, it looks up `Dog`'s prototype chain to `Dog`'s
  `[[Prototype]]` which is the object `Function.prototype` since `Dog` as a function is an instance of the `Function`
  constructor. There, the engine finds the property: `constructor` on `Function.prototype`, thus the property lookup is
  complete and the expression `Dog.constructor` resolves to `Function` since that is the value `Function.prototype`'s
  `constructor` property references. This example illustrates the process by which JS resolves property lookups
  via the prototype chain as well as behavior _delegation_ since, while `Dog` doesn't "own" a `constructor` property
  itself, `Dog` can delegate the property accessor `.constructor` to another object on its prototype chain (which is
  how JS found `constructor` on `Function.prototype`)

concept/principle:
  - property lookup
  - delegation of property accessor (or method invocation) via the prototype chain
  - function prototype vs object prototype

property         (the `Dog` "class")  (`Function`'s function prototype)
lookup path      ->   `Dog`            ->     `Function.prototype`
                                                       ^
                                                       |
                                       lookup RESOLVED here since `Function.prototype`
                                       has the a property named `constructor` which
                                       points to `Function`
*/