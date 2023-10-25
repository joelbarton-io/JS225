(function () {
  (() => { // iife using arrow syntax
    console.log(this); // null
  })();

  (function () { // iife using anonymous function expression syntax
    console.log(this); // undefined
  })();
}).call(null); // use `call` to configure outer iife's execution context

/*

the first, inner iife is defined using the arrow function expression syntax and on account of the
arrow syntax, derives its execution context from the enclosing lexical scope where it was defined at
time of definition.  Since we invoked the outer iife with `call` and specified `null` as the reciever's
context object, `this` in the enclosing lexical scope of the first, inner iife's definition is `null`
and thus the arrow function's context object is `null`.

the second, inner iife is defined using a normal (non-arrow) function expression syntax and as such
has implicit function execution context which resolves to the global object.  Since we're executing
code in an ESmodule within `Node`, all our code in the file is executing in strict mode. When a
function is invoked in a manner that would normally result in `this` resolving to the global object,
in strict mode the value of `this` will instead reference `undefined`.  This explains the difference
in behavior.
*/
