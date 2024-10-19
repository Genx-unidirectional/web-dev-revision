"use strict";
//  How do you create an empty array in JavaScript?
var arr = Array(0);
var arr2 = [];
// console.log(arr);
arr.pop();
//Question:1- Create range function which give array of specified range
function range(start, stop, step) {
    return Array.from({ length: (stop - start) / step + 1 }, function (_, i) { return start + i * step; });
}
// console.log(range(1, 10, 1));
//Another method to create array
var arr3 = Array.of(1, 2, 3);
console.log(arr3);
