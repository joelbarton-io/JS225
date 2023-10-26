const container = {};

container.func = (function () {
  'use strict';
  return function () {
    console.log(this); // logs: Window
  };
})();

const fn = container.func.bind(this); // `bind` returns a new function
fn();
container.func.call(this); // subverts strict mode behavior?

/*
explanation and notes assume BROWSER as runtime env

On line 1 we declare `container` and initialize it to an object literal.
Then, we create a `func` property on `container` and assign it the value
of the return value of an immediately invoked function expression.  The
return value of the iife is another function object which, importantly
was defined in strict mode enabled environment (e.g 'use strict' is used
on line 4).  Then we extract the value referenced by the `func` property
of `container` and use it to initialize the `myFunc` constant on line 10.
Finally, we invoke the function referenced by `myFunc` via normal function
invocation so it has an implicit function execution context (and thus we
would expect `this` within the function referenced by `myFunc` to be
`window` in non-strict mode code), it instead prints `undefined`.
*/
