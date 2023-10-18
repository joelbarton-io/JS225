/* eslint-disable no-console */
const obj = {
  meth() {
    console.log(this.a);
  },
  a: 1,
};

const myFunction = obj.meth.bind(obj);
export { myFunction };
