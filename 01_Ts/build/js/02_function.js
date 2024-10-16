"use strict";
//Q-use generic in order to take explicit type in function to combine the different array types
function combine(arg1, arg2) {
    return arg1.concat(arg2);
}
console.log(combine([1, 2, 3], ["tim", "jerry"]));
function makeDate(morTimeStamps, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(morTimeStamps, d, y);
    }
    else {
        return new Date(morTimeStamps);
    }
}
//Q-make function for map
function mapIt(arr, callback) {
    return arr.map(callback);
}
function MyObj(name, age, Ethnicity) {
    this.Ethnicity = Ethnicity;
    this.name = name;
    this.age = age;
    this.getJob = () => {
        return "got a job";
    };
}
MyObj.prototype.greet = function () {
    console.log(`hello ${this.name}`);
};
function EmployeeObj(name, age, Ethnicity) {
    MyObj.call(this, name, age, Ethnicity);
    this.ethics = this.ethics;
    this.work = () => {
        console.log("does the job");
    };
}
EmployeeObj.prototype = Object.create(MyObj.prototype);
