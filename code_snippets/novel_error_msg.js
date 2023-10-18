const boundFunction = function () {
  console.log(this.random);
}.bind({ random: 'RANDOM!' });

console.log(boundFunction.toString())
