# Strict Mode (as it relates to concepts introduced in JS225)

- `.ejs` modules [automatically](/code_snippets/uses_es_module.mjs) run as strict mode code
- `.cjs` modules don't seem to have this [same behavior](/code_snippets/uses_cjs_module.cjs)
- strict mode is a compile time concept (as opposed to a _runtime concept_) and is implemented _lexically_ (position in source code)
- it appears that strict mode's influence upon a function's execution context can be [subverted via indirect invocation](/code_snippets/strict_with_bound_function.js) or the use of `bind` which creates a new `function` object which as far as I can tell does not "inherit" the original `function`'s strictness.
- 