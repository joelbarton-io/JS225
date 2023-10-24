const container = {
  method: function () {
    console.log(this); // `container`: { method: [Function: method] }
    // `this` doesn't propagate to `internalFn`
    function internalFn() {
      console.log(this);
    }
    // `internalFn` has implicit function execution context
    internalFn(); // `window` or `undefined` depending on env & if exe in strict mode
  },
};

// `method` has implicit method execution context
container.method();