# ES6 class syntax

> syntactic sugar atop the underlying constructor & prototype (pseudo-_classical_ pattern)

has a few important difference in behavior to **pseudoclassical**:

1. strict mode enforced by default
2. class declaration ! hoisted with body (name only!)
3. cannot reassign the underlying function's `prototype` property
4. enforces use; must use constructor invocation;, will throw a `TypeError` otherwise

