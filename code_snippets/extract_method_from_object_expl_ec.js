let container = {
  exponent: 2,
  normal: function (num) {
    return Math.pow(num, this.exponent);
  },
};

let arr = [1, 2, 3]; // declare `arr` and initialize to array object.
const cb = container.normal; // declare `cb` and initialize to anonymous function object via property accessor: thereby extracting the function from its container
arr.map(cb, container); // use `map` to interate over `arr`, and for every iteration, `map` invokes the anonymous function `cb` and passes in the current element in `arr` to the cb

/*
My question: Since `map` is the "agent" of invocation and supplies `cb`'s execution context through the `thisArg`,
would this be considered an example of indirect invocation?  I've review the cirriculum and cant seem to find a
conclusive answer.  My intuition is that it is not indirect invocation but instead a subtype of function invocation
that involves passing a context object to a function since it seems like the category: "indirect invocation" is
reserved for when we use `call` `apply` and somewhat `bind`.  Is this intuition correct?
*/
