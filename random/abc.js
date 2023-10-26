/* eslint-disable no-console */
// const cb = (function a() {
//   this.forEach((element) => {
//     console.log(element);
//   });
// }).bind([1, 2]);

// function b(callback) {
//   return callback();
// }

// b(cb);

// const foo = {
//   bar: 10,
//   cb(arg) {
//     console.log(arg * this.bar);
//   },
//   multiplyByBar(...args) {
//     args.forEach(this.cb, this);
//   },
// };

// foo.multiplyByBar(1, 2, 3);

// const a = {};
// const b = Object.create(a);
// const c = Object.create(b);
// console.log(c.fakeMethod());

console.log(global.a()); // 'bye'

function a() {
  console.log('bye');
}

console.log(global.a);
