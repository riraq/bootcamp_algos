// In this activity you will be writing code to create a function that determines whether a number is odd or even.

// Instructions
// Open Unsolved/odd-or-even.js in your code editor -- this is the only file you will modify in this activity.

// In this file you will be writing code in the body of the oddOrEven function to achieve the following:

// If num is evenly divisible by 2, return the string "even".

// If num is NOT evenly divisible by 2, return the string "odd".

// You can check to see if your function works properly by opening Unsolved/test.html in your web browser.

// Functions that pass the tests will be denoted with a green check mark.

// Functions that fail the tests will be denoted with a red x and an error message.

// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function (num) {
  if (num % 2 === 0) {
    return "even"
  } else {
    return "odd"
  }
};
