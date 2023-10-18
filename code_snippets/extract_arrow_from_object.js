let object = {
  exponent: 2,
  arrow: (num) => {
    return Math.pow(num, this.exponent);
  },
};

let arr = [1, 2, 3];
console.log(arr.map(object.arrow));

/*
line 9 explanation:

  1. extract the arrow function from its containing object via property accessor
  2. pass the arrow function to `map`
  3. `map` interates over `arr` elements passing each element to the arrow function
  4. `map` invokes the arrow function with the element as an argument via function invocation
  5. since arrow functions inherit their EC from their enclosing lexical scope at the time of
    their definition, the value of `this` on lines 3-5 is the global object (window or global
    depending on environment), when `map` invokes the arrow function, the callback's EC is already set
*/
