"use strict";
//  Question 1: Sum of all natural numbers from 1 to n
function sumOfNum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// console.log(sumOfNum(3));
//  Question 2: Sum of digits of a number
function sumOfDigits(n) {
    let sum = 0;
    let copy = n;
    for (let i = 0; i <= n; i++) {
        sum += copy % 10;
        copy = Math.floor(copy / 10);
    }
    return sum;
}
// console.log(sumOfDigits(1234));
//  Question 3: Count the number of digits of a number
function countDigits(n) {
    let count = 0;
    let copy = Math.abs(n);
    while (copy > 0) {
        copy = Math.floor(copy / 10);
        count++;
    }
    return count;
}
// console.log(countDigits(-1234));
//  Question 4: Check if a number is palindrome
function checkNumPalindrome(n) {
    let copy = n;
    let reversedNum = 0;
    while (copy > 0) {
        reversedNum = reversedNum * 10 + (copy % 10);
        copy = Math.floor(copy / 10);
    }
    return n === reversedNum;
}
//  Question 5: Find nth Fibonacci number
//using recursion
function fibOfNum(n) {
    if (n == 1) {
        return 0;
    }
    if (n == 2) {
        return 1;
    }
    return fibOfNum(n - 1) + fibOfNum(n - 2);
}
// console.log(fibOfNum(7));
//using dynamic programming bottom up approach
function fibOfNum2(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    let fibArr = [0, 1];
    for (let i = 3; i <= n; i++) {
        fibArr[i - 1] = fibArr[i - 2] + fibArr[i - 3];
    }
    return fibArr[n - 1];
}
//Optimized space complexity
function fibOfNum3(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    let a = 0, b = 1;
    for (let i = 3; i <= n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }
    return b;
}
// console.log(fibOfNum3(7));
/*
Question 6: Missing Number in an Array
Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array.
*/
function identifyMissing(arr) {
    let missingNum;
    for (let i = 0; i < arr.length; i++) {
        if (i !== arr[i]) {
            missingNum = i;
        }
    }
    return missingNum;
}
// console.log(identifyMissing([0, 1, 2, 3, 4, 6]));
//Using formula to find missing
//Context is number should start from 0 to n and only one number is missing
//missingNumber = sum of number from 0 to n - sum of actual numbers in array
function identifyMissing2(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (arr.length * (arr.length + 1)) / 2 - sum;
}
// console.log(identifyMissing2([0, 1, 2, 3, 5]));
// Question-7:Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
function findCountOfOdd(low, high) {
    let count = 0;
    for (let i = low; i <= high; i++) {
        if (i % 2 === 0) {
            continue;
        }
        count++;
    }
    return count;
}
// console.log(findCountOfOdd(1, 10));
// using more efficient approach
function countOdd(low, high) {
    //solution would be => counting odd from 1 to low-1 -counting odd from 1 to high
    return Math.floor((high + 1) / 2) - Math.floor(low / 2);
}
// console.log(countOdd(3, 7));
// Question-8Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x
function itsPowerOfTwo(n) {
    if (n <= 0)
        return false;
    while (n % 2 === 0) {
        n /= 2;
    }
    return n === 1;
}
// console.log(itsPowerOfTwo(8));
//Question-9: Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
function squareRoot(n) {
    let root = 0;
    for (let i = n; i >= 0; i--) {
        if (i * i === n) {
            root = i;
            return root;
        }
    }
}
// console.log(squareRoot(225));
//Number methods
console.log(Number.isFinite(1 / 0));
console.log(Number.isInteger(1.2));
console.log(Number.parseFloat("123abcs"));
console.log(Number.parseInt("0", 2));
console.log(Number.isSafeInteger(45676543211234567));
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log((12321.222).toFixed(2));
console.log((12321.222).toPrecision(2));
console.log((1233).toLocaleString("en-IN"));
