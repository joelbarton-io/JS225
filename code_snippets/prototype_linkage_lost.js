function A() { }
function B() { }

B.prototype.newBehavior = function () {
  p('new behavior');
}

const aBefore = new A();

A.prototype = Object.create(B.prototype); // reassign `A`'s `prototype` prop
A.prototype.constructor = A;

const aAfter = new A();

aAfter.newBehavior();
aBefore.newBehavior(); // TypeError
