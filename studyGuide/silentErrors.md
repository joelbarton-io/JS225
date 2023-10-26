# Silent Errors

"Silent errors" in JavaScript refer to mistakes in code that don't cause the program to crash or throw an error, but rather result in unexpected or incorrect behavior. They can be hard to debug because they don't provide immediate feedback about what went wrong. Below are 10 examples of silent errors in JavaScript when the code executes without the use strict directive:

1. Implicit Global Variables: Without use strict, assigning a value to an undeclared variable creates a global variable.

   ```javascript
   x = 10; // Implicitly creates a global variable if 'x' is not declared
   ```

2. Deleting Variables and Functions: Without use strict, you can delete variables and functions which can lead to unexpected behaviors.

   ```javascript
   var x = 10;
   delete x; // Deletes variable 'x'
   ```

3. Duplicate Parameter Names: Without use strict, functions can have parameters with the same name.

   ```javascript
   function duplicateParameters(a, a) {
     return a; // Returns the value of the second 'a'
   }
   ```

4. Assignment to Non-writable Global Variables: Without use strict, assigning a value to a non-writable global variable does not throw an error.

   ```javascript
   undefined = "new value"; // Assigns a new value to 'undefined', which is a non-writable global variable
   ```

5. Octal Syntax: Without use strict, octal literals are allowed.

   ```javascript
   var octalValue = 012; // Octal literal for decimal 10
   ```

6. Setting Properties on Primitive Values: Without use strict, setting properties on primitives does not throw an error.

   ```javascript
   false.true = ""; // Silently fails
   ```

7. With Statement: Without use strict, the with statement is allowed, which can lead to unexpected behavior.

   ```javascript
   with (obj) {
     property = "new value"; // Ambiguous: sets either obj.property or a global variable 'property'
   }
   ```

8. Assignment to Undeclared Variables: Without use strict, assigning to undeclared variables creates a global variable.

   ```javascript
   undeclaredVariable = 10; // Implicitly creates a global variable
   ```

9. Assignment to NaN: Without use strict, assigning to NaN does not throw an error.

   ```javascript
   NaN = "not a number"; // Silently fails
   ```

10. Deleting Variables and Functions: Without use strict, deleting variables and functions does not throw an error.

    ```javascript
    function x() {}
    delete x; // Deletes function 'x'
    ```
