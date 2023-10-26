function makeContainer() {
  let privateVariable = 0;

  const container = {
    decrementData() {
      privateVariable -= 1;
    },
    incrementData() {
      privateVariable += 1;
    },
    getData() {
      console.log(privateVariable);
    }
  }

  return container;
}

const myContainer = makeContainer();

myContainer.getData(); // 0
myContainer.incrementData();
myContainer.incrementData();
myContainer.incrementData();
myContainer.incrementData();
myContainer.getData(); // 4
myContainer.decrementData();
myContainer.getData(); // 3
