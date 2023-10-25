class Secret {
  constructor(userData) {
    this.userData = userData;
  }

  secretInfo() {
    function makeSecretData() {
      return 13;
    }

    /* eslint-disable no-console */
    console.log(`${this.userData} ${makeSecretData()}`);
  }
}
console.log(module);

module.exports = {
  Secret,
};
