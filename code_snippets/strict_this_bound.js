'use strict';

(function () {
  console.log(this); // ?
})();

function fn() {
  console.log('this is ->', this);
}

const boundFunction = fn.bind(global);

fn(); // ?
boundFunction(); // ?
