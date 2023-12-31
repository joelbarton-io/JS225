# delegation

> _What's the relationship between: prototypal inheritance and delegation?_

- a downstream object can be said to both _delegate to_ and _inherit from_ an upstream object via the prototype chain.
- The terms' relationship is evident when we think about the path taken to resolve a property lookup
- the term "delegation" is from the "point of view" of an downstream object; that downstream object can invoke a method that it doesn't "own" by delegating to an upstream object. In this scenario, the instance-object "delegates" the method ("message') to an object upstream of it via the prototype chain.
- Mirroring this, "prototypal inheritance" facilitates behavior sharing by upstream objects to downstream objects. Downstream objects inherit access to data and behaviors from upstream objects.

## delegate exercise code:

```jsx
function delegate(ctx, name, ...args) {
  return function () {
    return ctx[name](...args);
  };
}

// &

function delegate(ctx, name, ...args) {
  return () => ctx[name].apply(ctx, args);
}
```
