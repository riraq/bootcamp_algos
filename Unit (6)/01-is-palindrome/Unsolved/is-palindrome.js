// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  // turns the string into an array
  let strArr = str.split('')
  // turns the string into an array, then reverses it
  let reversed = str.split('').reverse();

  // compares each index of both arrays 
  // returns false at the first instance of a non-matching character 
  for (let i = 0; i < reversed.length; i++) {
    if (reversed[i] !== strArr[i]) {
      return false
    }
  }

  // returns true if for loop does not return false
  return true
};
