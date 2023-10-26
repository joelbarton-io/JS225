import SecretClass from '/Users/joelbarton/Desktop/my-code/LS/LS225/modules/es_js_module.mjs';
import Secret from '/Users/joelbarton/Desktop/my-code/LS/LS225/modules/es_js_module.mjs';
const mySecret = new SecretClass('ho ho ho');
const myOtherSecret = new Secret('hi hi hi');
mySecret.secretInfo();
myOtherSecret.secretInfo();

// random = 42; // throws an error bc of strict mode
// console.log(globalThis.random);
