# ES6 class syntax

> a "syntactic sugar"\* that's built atop the underlying constructor & prototype pattern

- has a few important difference in behavior to the underlying **pseudoclassical** implementation:

1. **strict mode** is enforced by default throughout a `class`' body
2. a `class` declaration isn't hoisted with its body (name only!)
3. cannot reassign the underlying `function`'s `prototype` property
4. enforces strict use of `new`: must use constructor invocation, otherwise a `TypeError` will be thrown

- class declarations are hoisted **WITHOUT** their bodies (same with class expressions)
- can be passed around just like functions since that's what they are under the hood
- offer a few additional language features

  1. `super` (facilitates behavior delegation w/o having to explicitly specify a context)
  2. allows a single `constructor` "class" method
  3. cleaner syntax (a "feature")
  4. uses `extends` to implement inheritance between classes (note: the underlying architecture is essentially the same so it's just prototype objects and functions)

- [classes](https://launchschool.com/gists/6ba85481)
- [`class` inheritance](https://launchschool.com/gists/cdba6a8e)
