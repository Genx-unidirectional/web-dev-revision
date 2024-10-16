"use strict";
//Utility types means creating types from types
//Awaited types
function giveAsyncData() {
    return new Promise((resolve, reject) => {
        resolve(() => new Promise((resolve, reject) => {
            resolve("done");
        }));
    });
}
const data = giveAsyncData()
    .then((asyncFunc) => asyncFunc())
    .then((data) => data);
function updateStudent(stud, updatedData) {
    return Object.assign(Object.assign({}, stud), updatedData);
}
const stud1 = {
    name: "kim",
    age: 40,
    isPass: false,
    isNaughty: false,
};
console.log(updateStudent(stud1, { isNaughty: true }));
//Required
const stud2 = {
    name: "tim",
    age: 3,
    isPass: false,
    isNaughty: true,
};
//Readonly
const stu3 = {
    age: 3,
    isPass: false,
    name: "lex",
};
const jobSheet1 = {
    Marketing: {
        salary: 1234,
        vacancies: 12,
    },
    SWE: {
        salary: 1234,
        vacancies: 12,
    },
    Typing: {
        salary: 1234,
        vacancies: 12,
    },
};
//Parameter type
function doShit(arg1, arg2) {
    return "yep";
}
//Instance type
class C {
    constructor() {
        this.x = 0;
        this.y = 2;
    }
}
const ct1 = {
    x: 0,
    y: 2,
};
