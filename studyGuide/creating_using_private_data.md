## Creating and Using Private Data

- Functions enclose (“envelop(e)”) the lexical environment at their point of definition.
- Those elements which the function requires “live on” and constitute the **private** data for the function.
- Closure is a key mechanism that facilitates data privacy.
  - When paired with objects and methods, closure ensures that other developers interact with the data in pre-determined, intended ways.
- Considerations:
  - Returning an object vs. returning a function with access to private data has its own set of trade-offs.
  - Factors to weigh include extensibility, ease of use, and effectively conveying intent to other developers.
