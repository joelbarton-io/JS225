console.log(sum([1, 7, -3, 3]));


var sum;
var numbers;


sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

function sum(arr) {
  return arr.reduce(function (sum, number) {
    sum += number;
    return sum;
  }, 0);
}
console.log(sum);

sum += sum(numbers);
