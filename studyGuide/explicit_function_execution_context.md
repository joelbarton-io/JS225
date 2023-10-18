# Explicit Function Execution Context

## **Core Concepts**

- Function object methods `apply()` and `call()` can be used to tie a function object to an explicit context object, thereby explicitly configuring the execution context for a function.
- “Binding a function to a context object occurs when you execute the function, not when you define it.”
- The method `bind`:
  - Returns a new function that calls the original function with the context supplied to `bind` as its first argument.
  - The original function remains unaltered; only the returned function gets the new binding.

## **Differences between `Function` methods**

- `bind` doesn't immediately invoke its receiver/calling object (the function being bound)
- `apply`'s second argument expects an array of arguments (`[1, 2, 3]`)
- `call`'s second argument expects individual arguments (comma separated or `...args` `1, 2, 3`)

## **Outlier scenarios**

- calling `bind` upon an arrow function will **NOT** work to modify it's EC
- the only way to "break" a context binding applied via `bind` is to invoke said function via constructor invocation (e.g use `new`)
