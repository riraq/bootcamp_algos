// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
  // setting variables to hold largest and second largest values
  // immediately adding first value to largest variable to skip the loop check
  let first = arr[0];
  let second = 0;

  // loop to check whether the number is larger than what is currently in the variables
  for (let i = 1; i < arr.length; i++) {
    // if -> number is larger than the current largest number,
    // move the current largest value to second largest value
    // put new largest value in first variable
    // else if -> number is larger than second variable,
    // replace variable. Otherwise, do nothing.
    if (arr[i] > first) {
      second = first
      first = arr[i]
    } else if (arr[i] > second) {
      second = arr[i]
    };
  }

  // return product of two largest numbers
  return first * second
};
