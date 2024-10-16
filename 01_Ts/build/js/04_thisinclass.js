"use strict";
class Test {
    constructor() {
        this.name = "ganesh";
    }
    getName() {
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
    constructor() {
        this.name = "ganesh";
        this.getName = () => {
            return this.name;
        };
    }
}
const testObj3 = new Test2();
const testObj4 = {
    name: "jake",
    getName: testObj3.getName,
};
console.log(testObj3.getName());
console.log(testObj4.getName());
class Double {
}
class Action {
    getShitDone() {
        return "done before deadline";
    }
}
