let container = {
  exponent: 2,
  normal: function (num) {
    return Math.pow(num, this.exponent);
  },
};

let arr = [1, 2, 3];
console.log(arr.map(container.normal));
/*
line 15 explanation:

  1. extract `normal` from `container` via property accessor
  2. pass the anonymous function to `map`
  3. `map` interates over `arr` elements passing each element as an argument to the anonymous function
  4. `map` invokes the anonymous function via function invocation thus `this` on line 9 is `window` or `undefined`
  5. thus the anonymous function receives its context implicitly upon invocation by `map`
*/
