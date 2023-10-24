function cb(num) {
  console.log(this); // logs: `undefined` `undefined` `undefined`
  return this + num;
}

const arr = [1, 2, 3];

// cb is invoked via normal function invocation (thus it has implicit function execution context)
let mappedArr = arr.map(cb);
console.log(mappedArr); // logs: [NaN, NaN, NaN]

/*
fix:

1. bind `cb inside of `map`
2. define `cb` with function expression syntax + bind at time of definition
3. specify context with `map`'s `thisArg` argument
4. dont use this, instead just use some variable of plain value

*/