//  How do you create an empty array in JavaScript?

const arr = Array(0);
const arr2 = [];
// console.log(arr);

arr.pop();

//Question:1- Create range function which give array of specified range

function range(start: number, stop: number, step: number) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
}

// console.log(range(1, 10, 1));

//Another method to create array

const arr3 = Array.of(1, 2, 3);
console.log(arr3);
