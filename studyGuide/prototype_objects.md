# prototype

- when we talk about a prototype, we are typically either talking about the entity which a function object's `prototype` property references (**function prototype**), or the entity which an object's `[[Prototype]]` references (**object prototype**)

## function prototype

- a default property on _most_ functions which, if invoked as a constructor, is used as the `[[Prototype]]` for instances which that constructor begets
- by default, functions defined using the arrow function syntax do not have this property

## object prototype

- the object to which a different object's special hidden `[[Prototype]]` property references; this referenced object is that object's direct prototype and the object from which it inherits
- it is the first "_link_" in the child object's prototype chain

## overridding a prototype

- a function/object prototype object is said to be overridden when there exists a method on said constructor which is "shadowed" by a method with the same name which is present on a "down stream" object 
