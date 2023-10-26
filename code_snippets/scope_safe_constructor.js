function ScopeSafeConstructor(name, age) {
  if (!(this instanceof ScopeSafeConstructor)) {
    return {
      error: "Function is meant to be called via constructor invocation!",
      thisVal: this
    }

  }
  const constructorExecutionContext = Object.create(ScopeSafeConstructor.prototype)
  constructorExecutionContext.name = name || "John";
  constructorExecutionContext.age = age || "Brown";
  return constructorExecutionContext;
}

console.log(ScopeSafeConstructor());
console.log(new ScopeSafeConstructor());
