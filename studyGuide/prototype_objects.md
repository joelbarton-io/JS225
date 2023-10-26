# Prototype Pattern

- when we talk about a prototype, we are typically either talking about the entity which a function's `prototype` property references (its **function prototype**), or the entity which an object's `[[Prototype]]` references (**object prototype**)

## "function prototype"

- `prototype` is a default property on _most_ functions which, if invoked as a constructor, is used as the `[[Prototype]]` for instances which that constructor begets
- the object referenced by a function's `prototype` property nearly invariably has a `constructor` property as well, which points back to the function object itself

- note: by default functions defined using the arrow function syntax do `not` have a `prototype` property though we can technically add one since they're just an object but this doesn't change the fact we cannot invoke them via _constructor invocation_

## "object prototype"

- the object to which a different object's special hidden `[[Prototype]]` property references; this referenced object is that object's direct prototype and the object from which it inherits
- it is the first "_link_" in the child object's prototype chain
- can also use the `__proto__` property to access an object's `[[Prototype]]`

## overridding the prototype

- a property (it's value function or some other static data field) defined on a (function/object) prototype object is said to be "overridden" when there exists a method on said constructor which is "shadowed" by a method with the same name which is present on a "down stream" object
- this behavior occurs as a result of the property lookup path: start looking for the property on the receiver, then work up the prototype chain
