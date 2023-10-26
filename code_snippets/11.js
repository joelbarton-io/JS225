// assumes Browser
'use strict';

const obj = {
  value: 13,
  method() {
    console.log(this.value); // prints 13

    function aFunction() {
      console.log(this); // prints undefined
      console.log(this.value); // throws a TypeError since `this` is: undefined bc of strict mode
    }

    aFunction();
  }
}

obj.method()
