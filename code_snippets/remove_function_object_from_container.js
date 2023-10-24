// context_loss: extract function object from original container
const container = {
  friendlyGreeting: 'Howdy partner!',
  sayHi: function () {
    console.log(`${this.friendlyGreeting}`);
  },
};

const friendlyGreeting = container.sayHi; // property accessor

friendlyGreeting(); // TypeError: tried to access the `sayHi` property of undefined
