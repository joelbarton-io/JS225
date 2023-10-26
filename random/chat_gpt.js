// const obj = Object.create(null);

// Object.defineProperties(obj, {
//   nonEnumerableProp: {
//     value: 'Joel Barton',
//     writable: false,
//     configurable: true,
//     enumerable: true,
//   }
// });

// Object.defineProperty(obj, 'enumerableProp', {
//   enumerable: true,
//   configurable: false,
//   get() {
//     return 'enumerable!';
//   },
// });

// Object.defineProperty(obj, "name", {
//   writable: true,
// });

// for (let prop in obj) {
//   console.log(obj[prop]);
// }


// console.log(obj.enumerableProp);







'use strict';

function myFunc() {
  myFunc = 'not a function!';
}

console.log(typeof myFunc); // 'function'
myFunc();
console.log(typeof myFunc); // 'string'
