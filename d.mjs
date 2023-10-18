class GoodBoy {
  constructor(name) {
    this.name = name;
  }

  wag() {
    console.log('Wag motor starting...')
  }
}

class Doggo extends GoodBoy {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  bark(count = 1) {
    if (typeof count !== 'number' | Number.isNaN(count) || count < 0) {
      throw new TypeError('count argument was the wrong type!');
    }

    if (count < 1) {
      return console.log(`${this.name} stopped barking!`);
    }

    console.log(`${this.name} said, "Woof!"`);
    return this.bark(count - 1);
  }

  wag() {
    super.wag();

    console.log(`${this.name}'s tail is fully engaged!!!`);
  }
}

export { Doggo };
