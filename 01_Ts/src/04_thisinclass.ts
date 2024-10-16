class Test {
  name: string = "ganesh";
  getName(): string {
    return this.name;
  }
}

const testObj = new Test();

const testObj2 = {
  name: "jake",
  getName: testObj.getName,
};

console.log(testObj.getName());
console.log(testObj2.getName());
class Test2 {
  name: string = "ganesh";
  getName = () => {
    return this.name;
  };
}

const testObj3 = new Test2();

const testObj4 = {
  name: "jake",
  getName: testObj3.getName,
};

console.log(testObj3.getName());
console.log(testObj4.getName());

abstract class Double {
  abstract getShitDone(): string;
}

class Action implements Double {
  getShitDone() {
    return "done before deadline";
  }
}
