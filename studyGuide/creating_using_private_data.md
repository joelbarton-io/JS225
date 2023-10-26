## Creating and Using Private Data

- Functions enclose (or “envelop(e)”) the lexical environment at their point of definition.
- Those identifiers which the function needs to execute correctly “live on” and are held by the references within the function's closure
- Closure is a key mechanism that facilitates **data and variable privacy**

## considerations

- Returning an object vs. returning a function with access to private data has its own set of trade-offs
- Factors to weigh include extensibility, ease of use, and effectively conveying intent to other developers or users of our functions/objects/classes
