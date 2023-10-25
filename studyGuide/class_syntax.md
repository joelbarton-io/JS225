# ES6 class syntax

> syntactic sugar that's built atop the underlying constructor & prototype (pseudo-_classical_ pattern)

has a few important difference in behavior to the underlying **pseudoclassical** implementation:

1. `strict mode` is enforced by default throughout a `class`' body
2. a `class` declaration isn't hoisted with its body (name only!)
3. cannot reassign the underlying `function`'s `prototype` property
4. enforces strict use of `new`: must use constructor invocation, otherwise a `TypeError` will be thrown
