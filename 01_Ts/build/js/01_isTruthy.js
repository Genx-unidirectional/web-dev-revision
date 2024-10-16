"use strict";
//Q-make generic to check the given input is object or not
function isObj(arg) {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
}
//Q-check given value is truthy or not
function isTruthy(arg) {
    if (Array.isArray(arg) && arg.length !== 0) {
        return { arg, is: false };
    }
    if (isObj(arg) && Object.keys(arg).length == 0) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
}
console.log(isTruthy({}));
console.log(isTruthy([]));
console.log(isTruthy(false));
console.log(isTruthy([9, 9]));
console.log(isTruthy({ name: "gex" }));
