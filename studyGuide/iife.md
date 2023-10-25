# Immediately Invoked Function Expression (IIFE)

An **Immediately Invoked Function Expression (IIFE)** is a crucial concept in JavaScript, especially in the context of managing scopes and preventing variable pollution in global namespace.

## Definition

An **IIFE** is a function that is both defined and invoked simultaneously.

## Importance of Grouping Operator

- The enclosing parentheses (e.g `( our_fn_expression )`) around the function act as a **grouping operator**. This operator's primary role is to control the evaluation of an expression.
- These enclosing parentheses ensure the function definition is parsed as an expression. In essence, being parsed as an expression means something has a return value. For IIFEs, that return value is the function object itself.

## Syntax Flexibility

- The argument list for an IIFE can be either inside the enclosing parentheses or outside; both interpretations are valid but eslint might have a preference depending on the environment (browser vs node vs other)
- Launch School (LS) states: "We can omit the parentheses around an IIFE when the function definition is an expression that doesn't occur at the beginning of a line."
- basically, we cannot use the function declaration syntax in an iifExpression because: duh

## Use Cases and Benefits

- IIFEs were particularly important in pre-ES6 JavaScript code to achieve **private scope** and avoid variable naming conflicts arising from `function` and `var` declarations, however with `let` and `const` iifes aren't quite as essential of a tool in modern JS to avoid these problems
- IIFEs are pivotal when we aim to prevent a polluted global namespace. If there's uncertainty regarding the existence of a variable or function name, IIFEs ensure we avoid potential naming conflicts.
- by using an IIFE, improvements are applied in both directions (global & local scopes)
- avoid variable naming conflicts when dealing with large body of code with lots of variables; also subverts `var` `function` hoisting issues
- provides flexibility with how much of an object’s data and functionality is visible via the object’s interface.
- It _is_ possible to reference an IIFE by name. This capability becomes essential when dealing with recursive function expressions, making it one of the few methods to invoke an IIFE with recursive behavior.

## Relationship to Closures

- IIFEs leverage closures in that they offer a means to access and privatize data, thus increasing data integrity and encapsulation.

## re: arrow functions and execution context

- just a simple example looking at different syntax for iifes, namely: [arrow vs normal](/code_snippets/iife_arrow_vs_normal.js)
