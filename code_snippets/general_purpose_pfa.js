function combine(first, second) { // 'primary'
  console.log(first + ' ' + second);
}

function partiallyApply(combineFunction, first) { // 'generator'
  return function (second) { // 'applicator'
    return combineFunction(first, second);
  }
}

const combineWords = partiallyApply(combine, 'hello');

combineWords('world');