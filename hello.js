/*

1. item creator (internal validator)
   : makes sure that all necessary information are present and valid.

   Properties:
     - SKU code
     - Item name
     - category
     - quantity

2. item manager (sounds like a constructor/object generator)
   : responsible for creating items, updating information about items,
    deleting items, and querying information about the items

   Methods:
     - create
     - update
     - delete
     - items
     - inStock
     - itemsInCategory

3. reports manager
   :generates reports for a specific item or ALL items

   Methods:
     - init
     - createReporter
     - reportInStock

*/

let ItemManager = (function () {
  // let items = [];

  let ItemCreator = function (args) { // item constructor
    this.notValid = true;

    let checkLength = function (string) {
      let len = string.replace(/ /gi, '').length;
      return len >= 5;
    }
    let processCategory = function (category) {
      let noSpaces = category.search(/ /) === -1;
      let longEnough = checkLength(category);
      return noSpaces && longEnough;
    }

    if (args.length === 3) {
      let [name, category, quantity] = args;
      if (checkLength(name) && processCategory(category)) { // props are valid
        this.notValid = false;
        this.name = name;
        this.category = category;
        this.quantity = quantity;
        this.SKU = `${name.replace(/ /gi, '').slice(0, 3)}${category.slice(0, 2)}`.toUpperCase();
      }
    }
  }

  return {
    items: [],
    create(...args) {
      let newItem = new ItemCreator(args);
      if (newItem.notValid) {
        return false;
      }
      this.items.push(newItem);
    },
    update() { },
    delete() { },

    inStock() { },
    itemsInCategory() { },
  };
}
)();

let ReportManager = (function () {
  let items;
  return {
    init(theItemManager) {
      console.log(this);
      items = theItemManager;
    },
  }
})();

ItemManager.create('basket ball', 'sports', 0);
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);
ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager); // OLOO approach given `init`?
console.log(ReportManager);
// ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

// ItemManager.update('SOCSP', { quantity: 0 });
// ItemManager.inStock();
// // returns list with the item objects for football and kitchen pot
// ReportManager.reportInStock();
// // logs football,kitchen pot
// ItemManager.itemsInCategory('sports');
// // returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.delete('SOCSP');
// ItemManager.items;
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

// const kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

// ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10


/*
OLOO:
  object create and init method on object


  Account {}
     |
     |
    user {}     should not have access to the anonymizer fn (only upon init and reanonymize)
     |
     |



 For some reason, this problem was really hard for me, I didn't recognize that the OLOO approach relied
 on using local variables (params of `init`) to capture state.  I wrongly assumed that the state of the
 object could simply exist as normal object properties (thus exposed) of `this`.  Additionally, it became
 clear that it was impossible to implement methods by placing them above the returned object from Account.
 So, placing the methods in the [[Prototype]] of the new object wasn't going to work if



let Account = {
  init(email, password, firstName, lastName) {
    this.displayName = (function (length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = ' ';
      const charactersLength = characters.length;

      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
    }
    )(16);

    this.reanonymize = function (oldPassword) {
      if (oldPassword === password) {
        this.displayName = (function (length) {
          const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          let result = ' ';
          const charactersLength = characters.length;

          for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }
        )(16);
        return true;
      }
      console.log(`Invalid Password`);
    };
    this.resetPassword = function (oldPassword, newPassword) {
      if (oldPassword === password) {
        password = newPassword;
        return true;
      } else {
        return "Invalid Password";
      }
    };
    this.firstName = function (inputPassword) {
      if (inputPassword === password) {
        return firstName;
      } else {
        return `Invalid password`;
      }
    };
    this.lastName = function (inputPassword) {
      if (inputPassword === password) {
        console.log(lastName);
      } else {
        console.log(`Invalid password`);
      }
    };
    this.email = function (inputPassword) {
      if (inputPassword === password) {
        console.log(email);
      } else {
        console.log(`Invalid password`);
      }
    };

    return this;
  }

};

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
fooBar;
// console.log(fooBar)
// console.log(fooBar.firstName);// returns the firstName function
// console.log(fooBar.email); // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// console.log(displayName);

// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false



*/

/*
  Account {init: ƒ, reanonymize: ƒ, resetPassword: ƒ, firstName: ƒ, lastName: ƒ, …}
     |
     |
    user {state} this is the model I expected

*/

// let Account = (function () {
//   function anonymize() {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     const charactersLength = characters.length;

//     for (let i = 0; i < 16; i++) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
//   }

//   function validatePassword(userInput) {
//     let userObject = privateData[this.displayName];
//     return userInput === userObject.password;
//   }

//   const privateData = {}; // accessible via closures of the returned object's methods

//   return {
//     init(email, password, firstName, lastName) {

//       if (arguments.length === 4) {
//         this.displayName = anonymize();

//         privateData[this.displayName] = {
//           email,
//           password,
//           firstName,
//           lastName
//         };
//       }
//       return this;
//     },

//     reanonymize(userInput) {
//       if (validatePassword.call(this, userInput)) {
//         this.displayName = anonymize();
//         return true;
//       }
//       return `Invalid Password`;
//     },

//     firstName(userInput) {
//       if (validatePassword.call(this, userInput)) {
//         return privateData[this.displayName].firstName;
//       }
//       return `Invalid Password`;
//     },
//     lastName(userInput) {
//       if (validatePassword.call(this, userInput)) {
//         return privateData[this.displayName].lastName;
//       }
//       return `Invalid Password`;
//     },
//     email(userInput) {
//       if (validatePassword.call(this, userInput)) {
//         return privateData[this.displayName].email;
//       }
//       return `Invalid Password`;
//     },
//     resetPassword(oldPassword, newPassword) {
//       if (validatePassword.call(this, oldPassword)) {
//         privateData[this.displayName].password = newPassword;
//         return true;
//       }
//       return `Invalid Password`;
//     },
//     showPrivate() {
//       return privateData;
//     }
//   }
// }
// )();

// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// let barFoo = Object.create(Account).init('bar@foo.com', '654321', 'bar', 'foo');



// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

// console.log(fooBar.showPrivate());






// items: [],
// update() { },
// delete() { },
// inStock() { console.log(this) },
// itemsInCategory() { },