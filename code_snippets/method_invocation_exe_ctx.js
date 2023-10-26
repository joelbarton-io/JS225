const prot = {
  one: 1,
  plusOne: function (num) {
    console.log(num + this.one);
  },
};

const instance = Object.create(prot);
// instance.one = 100;
instance.plusOne(2);

/*
`plusOne` receives its execution context upon its invocation on line 9.
Since `plusOne` is invoked via "method invocation", it can  be said to
have "implicit method execution context"; `plusOne` receives its execution
context implicitly from the JavaScript engine.

The method uses the object referenced by `instance` to execute.  Since
the object `instance` doesn't have a property named 'plusOne', `instance`
can be said to "delegate" the method call to its `[[Prototype]]` which
is the object referenced by `prot` that was defined on lines 1-6.
`prot` has the `plusOne` property which references a function object,
so the property lookup is resolved and the function can be invoked
without error.

We then enter the function body where we encounter line 4.  First,
`num` resolves to the function-scoped variable `num` which references
the primitive `2`. Next, `this.one` must be resolved.  Since the current
ec is the object referenced by `instance`, this is where JavaScript looks
first.  It doesn't find a property: `one` on `instance` so it looks for
in `instance`'s object prototype `prot` which has the property: `one`.
Thus `this.one` resolves to the primitive `1` and the two values are
added together and `3` is logged to the console. Then the function
exits.

This code highlights several principles: 1) how execution context is
determined for functions invoked via method invocation, 2) the lookup
path that JavaScript takes to resolve variable and property references,
3) prototypal inheritance broadly (delegation & obj/fn prototypes), and
(a partially-implemented) OLOO object creation pattern.
*/
