const { Secret } = require('../modules/commonJS_module.cjs');
const mySecret = new Secret('heh heh heh');
mySecret.secretInfo();

// random = 42; // allows this bc no strict mode
// console.log(globalThis.random);
