"use strict";
const p1 = {
    name: "tim",
    problems: "nothing",
};
for (let key in p1) {
    console.log(p1[key]); //making the union literals of all keys inside the objBody
    console.log(p1[key]);
}
const box1 = {
    box: "square box",
};
const box2 = {
    box: {
        content: "good content",
    },
};
