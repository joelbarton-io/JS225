# modules

- softare programs are large and complex
- having everything inside a single file leads to problems for individual developers and teams

## some problems that modules help to alleviate

- code "entanglement" wherein code that was once simple when it was first written, over the years with different people working on a codebase, becomes entangled and difficult to understand
- code that is harder to comprehend at a glance as a result of the entanglement is harder to maintain
- encapsulation is more difficult to implement and more error-prone without modularization

## general benefits of code modularization

- Enhances comprehensibility by isolating self-contained pieces
- Minimizes code entanglement and eases navigation through the code
- Facilitates collaborative development by reducing conflict occurrences
- Promotes code reuse by modularizing self-contained functionalities
- Supports better encapsulation by separating concerns and maintaining private data within modules
- Modules explicitly export necessary items, keeping others private, thus maintaining a clean, organized code structure
- promote superior code style

# CommonJS Modules

- built for the `node` env
- basic syntax: `const name_of_module = require('name_of_module');`
- The `npm` ecosystem is built upon this format (`.cjs`)
- browsers don’t natively support CommonJS modules
- but we can use them with a transpiler like `Babel`

## steps

1. create file to place modularized code in
2. add desired code (just the name of some function?) before `module.exports`
3. import desired code into an `.cjs` file with `require` syntax

- if you’re exporting multiple items, just place their names in an object and list them. This can be variables, functions, classes, etc.
- if you do export multiple items, when you `require` that module, the return value is an object that contains all the items so you need _object de-structuring_ syntax

## CommonJS' variables

- `module` object that is current module
- `exports` names exported by module (`exports` === `module.exports`)
- `require(moduleName)` function that loads module
- `__dirname`: absolute pathname to directory that contains desired module
- `__filename`: absolute pathname of file that contains desired module

## remember

- when you have a module that wasn’t installed via `npm` you need to specify the path to the module on your local file system
- commonJS modules are suitable for Node applications where everything resides on the same machine, but not the browser, this is where either a transpiler or ES modules come in handy
- module code (since its in a file) can be executed from the CLI with the `node` command followed by the file name
