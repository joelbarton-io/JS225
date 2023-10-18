/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */



































// function fn(meaningful) {
//   return function () {
//     [meaningful, usedButUseless].forEach(value => {
//       console.log(typeof value);
//     });
//   };

//   function usedButUseless() { }
// }

// const myNewFunction = fn('my useful data');

// myNewFunction();




// function makeAccount(number) {
//   const transactions = [];
//   let balance = 0;
//   return {
//     transactions() {
//       return transactions;
//     },
//     balance() {
//       return balance;
//     },
//     number() {
//       return number;
//     },
//     deposit(amount, id) {
//       balance += amount;
//       if (!id) {
//         this.addTransaction('deposited', amount);
//         this.logTransaction('deposited', amount);
//       } else {
//         this.addTransaction('deposited', amount, id);
//         this.logTransaction('deposited', amount, id);
//       }
//       return amount;
//     },
//     withdraw(amount, id) {
//       let withdrawl = amount;
//       if (balance < amount) {
//         withdrawl = balance;
//         balance = 0;
//       } else {
//         balance -= amount;
//       }

//       if (!id) {
//         this.addTransaction('withdraw', withdrawl);
//         this.logTransaction('withdrawn', withdrawl);
//       } else {
//         this.addTransaction('withdrawn', withdrawl, id);
//         this.logTransaction('withdrawn', withdrawl, id);
//       }
//       return withdrawl;
//     },
//     addTransaction(type, amount, id) {
//       if (!id) {
//         transactions.push({ type, amount });
//       } else {
//         transactions.push({ type, amount, id });
//       }
//     },
//     logTransaction(type, amount, id) {
//       const time = new Date().toLocaleDateString('en-us', {
//         weekday: 'long', year: 'numeric', month: 'short', day: 'numeric',
//       });
//       if (!id) {
//         console.log(`$${amount} was ${type} at ${time}`);
//       } else {
//         console.log(`$${amount} was ${type} by: ${id} at ${time}`);
//       }
//     },
//   };
// }

// function makeBank() {
//   let number = 101;
//   const accounts = [];
//   return {
//     openAccount() {
//       const account = makeAccount(number);
//       number += 1;
//       accounts.push(account);
//       return account;
//     },
//     transfer(sourceAccount, destinationAccount, amount) {
//       const sourceExists = accounts.some((account) => account === sourceAccount);
//       const destinationExists = accounts.some((account) => account === destinationAccount);

//       if (sourceExists && destinationExists) {
//         const actualTransferAmount = sourceAccount.withdraw(amount, destinationAccount.number());
//         destinationAccount.deposit(actualTransferAmount, sourceAccount.number());
//         return actualTransferAmount;
//       }

//       throw new Error('Invalid transfer source or destination!');
//     },
//   };
// }

// function fourTimes(amount, action, ...accounts) { // [bank, source, destination]
//   if (accounts.length < 3) {
//     for (let i = 0; i < 4; i += 1) {
//       const singleAccount = accounts[0];
//       action.call(singleAccount, amount);
//     }
//   } else {
//     for (let i = 0; i < 4; i += 1) {
//       const [bank, source, destination] = accounts;
//       action.call(bank, source, destination, amount);
//     }
//   }
// }

// const bank = makeBank();
// const sugarDaddy = bank.openAccount();
// const sugarBaby = bank.openAccount();

// console.log(sugarDaddy.number());
// fourTimes(5000, sugarDaddy.deposit, sugarDaddy);
// console.log(sugarDaddy.transactions());


// console.log(sugarBaby.number());
// fourTimes(20, bank.transfer, bank, sugarDaddy, sugarBaby);
// console.log(sugarBaby.transactions());


// bank.transfer(source, destination, 7);
// source.balance();
// destination.balance();
// bank.transfer(destination, source, 7);
// source.balance();
// destination.balance();
// bank.transfer(source, destination, 7);
// source.balance();
// destination.balance();
// console.log(destination.transactions());



























// function (newItem) {
//   let index;
//   if (newItem) {
//     index = items.indexOf(newItem);
//     if (index === -1) {
//       items.push(newItem);
//       console.log(`${newItem} added!`);
//     } else {
//       items.splice(index, 1);
//       console.log(`${newItem} removed!`);
//     }
//   } else if (items.length === 0) {
//     console.log('The list is empty.');
//   } else {
//     items.forEach((item) => {
//       console.log(item);
//     });
//   }
// };


// function makeList() {
//   let items = [];

//   return {
//     add(...item) {
//       items.push(...item);
//     },
//     list() {
//       items.forEach((item) => console.log(item));
//     },
//     remove(item) {
//       items = items.filter((candidate) => candidate !== item);
//     },
//   };
// }

// const list = makeList();
// list.add('peas'); // peas added!
// list.list(); // peas
// list.add('corn'); // corn added!
// list.list(); // peas // corn
// list.remove('peas'); // peas removed!
// list.list(); // corn

















// function mathOperations() {
//   let startingValue = 0;

//   let add = function (toAdd) {
//     startingValue += toAdd;
//     console.log(startingValue);
//   }

//   let subtract = function (toSubtract) {
//     startingValue -= toSubtract;
//     console.log(startingValue);
//   }

//   return [add, subtract];
// }

// let [add, subtract] = mathOperations();

// add(1)
// add(42)
// subtract(39)
// add(6);

// function makeMultipleLister(number) {
//   let i;
//   return function () {
//     for (i = 0; i < 100; i += number) {
//       if (i % number === 0) console.log(i);
//     }
//   };
// }

// let lister = makeMultipleLister(13);
// lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91

// function makeList() {
//   const list = {};

//   return function (item) {
//     if (item) {
//       if (item in list) {
//         console.log(`${delete list[item]} removed!`);
//       } else {
//         console.log(`${item} added!`);
//         list[item] = true;
//       }
//     } else {
//       if (list.length) {
//         Object.keys(list).forEach(el => console.log(el));
//       } else {
//         console.log("List is empty");
//       }
//     }
//   };
// }

// let list = makeList();
// list();

// // The list is empty.
// list('make breakfast');
// // make breakfast added!
// list('read book');
// // read book added!
// list();
// // make breakfast
// // read book
// list('make breakfast');
// // make breakfast removed!
// list();
// read book
// function makeCounterLogger(number) {
//   let startNum;

//   return function (secondNumber) {
//     startNum = number;
//     if (startNum === secondNumber) {
//       console.log(startNum);
//     } else if (startNum > secondNumber) {
//       while (startNum >= secondNumber) {
//         console.log(startNum);
//         startNum--;
//       }
//     } else {
//       while (startNum <= secondNumber) {
//         console.log(startNum);
//         startNum++;
//       }
//     }
//   };
// }

// const countLog = makeCounterLogger(5);
// countLog(8);
// countLog(2);

// (function hoistingVisual() {

//   // // hoisted stuff
//   // let a;     //  |
//   // let b;     //  |
//   // // logValue    |
//   // //-------------+

//   function logValue() {
//     return a;
//   }
//   a = 5; // initialization!

//   console.log(logValue()); // invocation

//   if (b === 4) {
//     console.log(b);
//   }

//   b = 4; // initialization!
// }());

// function logValue() {
//   console.log(c, d, e, d);
//   return a;
// }

// // console.log(logValue());
// let a = 5;

// if (c === undefined || b === 4) {
//   console.log(b);
// }

// var c;
// let b = 4; // remove let and see the new error message

/*
So to understand this behavior you have to understand/know
a few things: that JS executes in stages (creation & execution),
how to follow the sequence of events of a program FROM THE
PERSPECTIVE OF THE JAVASCRIPT ENGINE'S INTERPRETER, and that
hoisting is a mental model only.  Js doesn't actually move
declared variables names, function names, etc to the top of the
scope wherein they're declared.  However, imagining that behavior
actually happening is helpful, but remember it's just a mental model.

We mostly need to focus on the execution stage when working with
modern JS (so basically avoiding var).  Ok so as far as the example...

from the human pov:

- the function `logVal` is declared
- local variable `a` is declared and initialized to a value (5);

- when we reach the conditional statement, JS tries to resolve variable
  `b` and realizes that, while it knows that `b` is a variable (via hoisting),
  `b` has not yet been initialized (hence the ReferenceError). This is
  because during the creation phase, Javascript is "made aware" of declared
  "things" (I want to say this is called tokenization) throughout the program.
  (this "being made aware" behavior is basically just the JS interpreter doing
  a first pass of our program and collecting information which is "explained"
  by hoisting)

- so while JS knows that `b` is eventually declared (via hoisting) `b` is as
 of yet, uninitialized at this stage in the program.

- this is why we get the ReferenceError.  `b` is declared from the perspective
  of the interpreter, but `b` doesn't reference anything yet as a result of
  the state of the program's execution at that point.

as far as `a`
*/

// const A = {
//   val: 'A',
//   methodA() {
//     return this.val;
//   },
// }

// const B = Object.create(A);
// B.val = 'B';

// // console.log(B.methodA());

// (function () {
//   const C = {
//     array: [1, 2, 3, 4, 5],
//     methodC() {
//       console.log(this); // {array: Array(5), methodC: ƒ}

//       this.array.forEach(function (n, idx) { // cb relies on implicit E.C.
//         console.log(this); // {array: Array(5), methodC: ƒ}
//         console.log(this.array[idx]);
//         // console.log(array[idx]);
//       });
//     }
//   };

//   C.methodC();
// }
// )();


