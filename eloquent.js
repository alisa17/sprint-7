/*
Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.

// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10 */

function min(a, b) {
    if (a < b) {
        return a;
    } else return b;
}
console.log(min(0, 10));
/*
Here’s another way to define whether a positive whole number is even or odd:
 Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this? */

function isEven(a) {
    if (a === 0) {
        return true;
    } else if (a === 1) {
        return false;
    } else if (a < 0) {
        return isEven(0- a - 2);
    } else {
        return isEven(a - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
/*
Bean counting

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.
*/

function countBs(string) {
  var count = 0;
  for (var i=0; i<string.length; i++) {
    if (string[i] === 'B')
    count++;
  }
  return count;
}
console.log(countBs("BBC"));

function countBs(string) {
  var count = 0;
  for (var i=0; i<string.length; i++) {
    if (string[i] === 'B')
    count++;
  }
  return count;
}

function countChar(string, char) {
  var count = 0;
  for (var i=0; i<string.length; i++) {
    if (string[i] === char)
    count++;
  }
  return count;
}
console.log(countChar("kakkerlak", "k"));
