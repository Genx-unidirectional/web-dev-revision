"use strict";
var str = "tim";
// console.log(str.length);
var testStr = "hello i am ganesh any help needed is going to be provided by me";
// console.log(testStr.charAt(2));
// console.log(testStr.includes("i"));
// console.log(testStr.indexOf("am"));
// console.log(testStr.slice(0, -1));
// console.log(testStr.substring(0));
// console.log(str.concat(testStr));
// console.log(testStr.endsWith("me"));
// console.log(testStr.startsWith("hello"));
// console.log(testStr.lastIndexOf("m"));
// console.log(testStr.trimEnd());
// console.log(testStr.padEnd(testStr.length + 10, "abab"));
// console.log(testStr.concat(str.repeat(2)));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.split(""));
// console.log(testStr.replace("hello", "bye"));
// console.log(testStr.replaceAll("e", "O"));
//Question:1-> Convert object into string
function convertObjToStr(obj) {
    return JSON.stringify(obj);
}
var testObjStr = {
    name: "ganesh",
    age: 12,
    team: "not to quit",
};
var resultStr = convertObjToStr(testObjStr);
//Question:2->Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// function strStr(haystack: string, needle: string): number {}
//Question:3->Given two strings s and t, return true if t is an anagram of s, and false otherwise.
function isAnagram(s, t) {
    var record1 = {};
    var record2 = {};
    if (s.length !== t.length)
        return false;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        record1[char] = record1[char] ? ++record1[char] : 1;
    }
    for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
        var char = t_1[_a];
        record2[char] = record2[char] ? ++record2[char] : 1;
    }
    for (var item in record1) {
        if (record1[item] !== record2[item]) {
            return false;
        }
    }
    return true;
}
// console.log(isAnagram("aacc", "ccac"));
//Question-4=>Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string
function longestCommonPrefix(strs) {
    var prefix = "";
    var i = 0;
    while (strs.every(function (item) { return item.indexOf(prefix + strs[0][i]) === 0; })) {
        if (strs[0][i] === undefined) {
            break;
        }
        prefix = prefix + strs[0][i];
        i++;
    }
    return prefix.length > 0 ? prefix : "";
}
// console.log(longestCommonPrefix(["jim", "jimmi", "jimanji"]));
//Question-5=>You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
function mergeAlternately(word1, word2) {
    var mergedStr = "";
    var i = 0;
    while (i < word1.length || i < word2.length) {
        if (i < word1.length) {
            mergedStr += word1[i];
        }
        if (i < word2.length) {
            mergedStr += word2[i];
        }
        i++;
    }
    return mergedStr;
}
//top answer
function mergeAlternately2(word1, word2) {
    var index = 0;
    var mergedStr = [];
    while (word1.length > index && word2.length > index) {
        mergedStr.push(word1.charAt(index));
        mergedStr.push(word2.charAt(index));
        index++;
    }
    if (word1.length < word2.length) {
        mergedStr.push(word2.substring(index));
    }
    else {
        mergedStr.push(word1.substring(index));
    }
    return mergedStr.join("");
}
// console.log(mergeAlternately("jimmy", "my"));
// Question-6:Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
function lengthOfLastWord(s) {
    var stringStr = s.split(" ").filter(function (item) { return item !== ""; });
    var length = 0;
    for (var i = 0; i < stringStr.length; i++) {
        if (i === stringStr.length - 1) {
            length = stringStr[i].length;
        }
    }
    return length;
}
// console.log(
//   lengthOfLastWord("this stuff is getting done even though it's good   ")
// );
// Question-7:A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
function isPalindrome(s) {
    var filterStr = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
    var reversedStr = "";
    for (var _i = 0, filterStr_1 = filterStr; _i < filterStr_1.length; _i++) {
        var char = filterStr_1[_i];
        reversedStr = char + reversedStr;
    }
    return filterStr === reversedStr;
}
// console.log(isPalindrome("ab_a"));
//Question-8-> Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
// After you are done modifying the input array, return the new length of the array.
// You must write an algorithm that uses only constant extra space.
function compress(chars) {
    var write = 0;
    var read = 0;
    while (read < chars.length) {
        var char = chars[read];
        var count = 0;
        while (read < chars.length && chars[read] === char) {
            count++;
            read++;
        }
        chars[write] = char;
        write++;
        if (count > 1) {
            for (var _i = 0, _a = count.toString(); _i < _a.length; _i++) {
                var digit = _a[_i];
                chars[write] = digit;
                write++;
            }
        }
    }
    return write;
}
// console.log(compress(["a", "a", "d", "b", "d", "d"]));
// Question-9->Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
function reverseWords(s) {
    return s
        .split(" ")
        .filter(function (item) { return item !== ""; })
        .reverse()
        .join(" ");
}
function reverseWords2(s) {
    var wordsArr = s.split(" ").filter(function (item) { return item !== ""; });
    //now we gonna reverse the words inside the words array
    for (var i = 0; i < wordsArr.length / 2; i++) {
        var temp = wordsArr[i];
        wordsArr[i] = wordsArr[wordsArr.length - 1 - i];
        wordsArr[wordsArr.length - 1 - i] = temp;
    }
    return wordsArr.join(" ");
}
console.log(reverseWords2("hello this     is ganesh   "));
// Question-10=>Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
function reverseVowels(s) {
    var vowelsArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var arrayVowelsIndex = [];
    var copyStr = s.split("");
    for (var i = 0; i < s.length; i++) {
        if (vowelsArr.includes(s[i])) {
            arrayVowelsIndex.push(i);
        }
    }
    for (var i = 0; i < arrayVowelsIndex.length / 2; i++) {
        var temp = copyStr[arrayVowelsIndex[i]];
        copyStr[arrayVowelsIndex[i]] =
            copyStr[arrayVowelsIndex[arrayVowelsIndex.length - 1 - i]];
        copyStr[arrayVowelsIndex[arrayVowelsIndex.length - 1 - i]] = temp;
    }
    return copyStr.join("");
}
console.log(reverseVowels("team"));
// Question-11->Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.
//WRONG CODE
// function rotateString(s: string, goal: string): boolean {
//   let sArr = s.split("");
//   let halfArr = s.slice(s.length / 2).split("");
//   for (let i = 0; i < sArr.length / 2 - 1; i++) {
//     halfArr.push(sArr[i]);
//   }
//   console.log(halfArr);
//   return halfArr.join("") === goal;
// }
function rotateString(s, goal) {
    var fullStr = s.concat(s);
    return fullStr.includes(goal) && fullStr.length / 2 === goal.length;
}
console.log(rotateString("hello", "llohe"));
