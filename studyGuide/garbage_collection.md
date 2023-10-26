# Garbage Collection in JavaScript

## Basics of Memory in JavaScript

- JavaScript has two regions of memory: the stack and the heap
  - **Stack**: Stores primitives and references
  - **Heap**: Stores objects and everything else excluding references and most primitives
- Javascript determines space requirements during the creation phase (think: hoisting), with exceptions for string and BigInt primitives
- String and BigInt primitives act similarly to being stored on the stack even though they might be stored on the heap (implementation detail)

## The Stack vs. the Heap

### The Stack

- Operates on an **allocate and release** scheme
- **Primitive values stored on the stack don't participate in garbage collection**
- The stack itself does NOT participate in garbage collection

### The Heap

- uses garbage collection to manage memory- Relies upon garbage collection to determine when a value’s reference count reaches 0- If some data is no longer reachable, that portion of heap memory can be released

## Garbage Collection Principles

- An object value becomes eligible for garbage collection once it is no longer reachable
- Both variables and property names contribute to a value’s reference count- **As long as an object or value remains accessible, it won't be garbage collected**- Modern JavaScript employs the **Mark and Sweep** algorithm for garbage collection- a limitation of **Mark and Sweep** algorithms is the potential to introduce memory fragmentation where memory is non-contiguous or broken up into chunks

## Closures and Garbage Collection

- Closures hold or retain relevant identifiers that they need which are present in the closure's enclosing lexical scope causing the reference to persist and preventing garbage collection- If a situation necessitates the removal of a closure or a reference, you can assign `null` to the item referencing the closure or reference, which is termed as **dereferencing** - Once dereferenced, that data becomes eligible for garbage collection

## ChatGPT3.5

# The Golden Rule of JavaScript Garbage Collection

The "Golden Rule" of JavaScript's implementation of garbage collection can be summarized as follows:

**"JavaScript uses automatic memory management, so you don't need to worry about deallocating memory or explicitly destroying objects. Instead, focus on cleaning up references to objects you no longer need."**

In other words, JavaScript manages memory for you through its garbage collection mechanism, which automatically identifies and reclaims memory that is no longer in use. This means you don't need to manually free up memory or destroy objects as you might in lower-level languages like C or C++
However, you do need to be mindful of references to objects. The JavaScript engine can only collect objects that are no longer reachable or referenced by any part of your code. So, if you maintain references to objects that you no longer need, they won't be garbage collected, and you may encounter memory leaks
Here are a few practical tips that follow from this golden rule:

1. **Clear Unwanted References**: Make sure you nullify or remove references to objects when you're done using them. This is particularly important in long-running applications or when working with large data structures
2. **Be Careful with Closures**: Closures can keep references to variables and objects longer than expected, potentially leading to memory leaks. Be cautious when using closures within event handlers or callbacks
3. **Use the `delete` Operator Sparingly**: The `delete` operator can be used to remove properties from objects, but it doesn't necessarily trigger immediate garbage collection. It's generally better to set the reference to `null` or let it go out of scope naturally
4. **Avoid Circular References**: Circular references, where objects reference each other in a loop, can prevent objects from being garbage collected. Be aware of such situations and try to redesign your code to avoid them
5. **Use Modern JavaScript**: Modern JavaScript engines are continuously improving their garbage collection algorithms. Keeping your JavaScript engine up to date and using the latest language features can help ensure efficient memory management
   By following these guidelines and understanding how JavaScript's garbage collection works, you can write code that is memory-efficient and less prone to memory leaks
