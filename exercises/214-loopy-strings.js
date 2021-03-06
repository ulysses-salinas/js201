// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse(str) {
  return str.split("").reverse().join("");
}

reverse("skoob");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function findLongestWord(str) {
  let splitWord = str.split(" ");
  let long = splitWord[0];
  for (i = 0; i < splitWord.length; i++) {
    if (splitWord[i].length > long.length) {
      long = splitWord[i];
    }
  }
  return long;
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

function nicer(str) {
  let clean = str.replace(/ darn| heck| dang| crappy/gi, "");
  return clean;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

function capitalizeAll(str) {
  let splat = str.split(" ");
  let str2 = "";
  for (let i = 0; i < splat.length; i++) {
    if (splat[i].length > 0) {
      str2 =
        str2 +
        splat[i].split("")[0].toUpperCase() +
        splat[i].split("").slice(1).join("") +
        " ";
    }
  }
  return str2.trim();
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

function split (string, delimiter) {
  let strings = [""];
  let stringIndex = 0;
  let stringBuild = "";
  let matched = false;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < delimiter.length; j++) {
      if (string.charAt(i) === delimiter.charAt(j)) {
        matched = true;
      }
    }
    if (matched === true) {
      if (stringBuild === "") {
        matched = false;
      } else {
        strings[stringIndex] = stringBuild;
        stringBuild = "";
        stringIndex++;
      }
    } else {
      stringBuild = stringBuild + string.charAt(i);
    }
    strings[stringIndex] = stringBuild;
  }
  return strings;
}
