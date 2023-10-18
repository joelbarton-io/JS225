'use strict';
import { Doggo } from './d.mjs'

const rocket = new Doggo("Rocket");

rocket.bark(3);

rocket.wag();
























// function delegate(object, fnName, ...args) {
//   return (() => object[fnName].call(object, ...args))
// }

// const foo = {
//   name: 'test',
//   bar(greeting) {
//     console.log(`${greeting} ${this.name}`);
//   },
// };

// const baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };

// baz.qux();   // logs 'hello test';

// foo.bar = () => { console.log('changed'); };

// baz.qux();          // logs 'changed'






// name property added to make objects easier to identify
// const foo = { name: 'foo' };
// const bar = Object.create(foo);
// bar.name = 'bar';
// const baz = Object.create(bar);
// baz.name = 'baz';
// const qux = Object.create(baz);
// qux.name = 'qux';

// Object.prototype.ancestors = function () {
//   const list = [];

//   return (function ancestors() {
//     const next = Object.getPrototypeOf(this);
//     if (next === null) {
//       return list;
//     }
//     list.push(next.name || 'Object.prototype');
//     return ancestors.call(next);
//   }).call(this);
// }

// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']




















/*
class GlobalScope {
  #privateField = 'privateData'
  constructor() {
    this._lookedForVariable = "Hiyyaa!";
  }
}

class LocalScopeAlpha extends GlobalScope { // `GlobalScope` encloses `LocalScopeAlpha`

}

class LocalScopeBeta extends GlobalScope { // `GlobalScope` encloses `LocalScopeBeta`

}

class LocalLocalScope extends LocalScopeAlpha { // `LocalSCopeAlpha` encloses `LocalLocalScope`
  constructor(variable) {
    super();
    this.variable = variable;
  }
}


const currentlyExecutingCode = new LocalLocalScope("information");

console.log(currentlyExecutingCode);

*/