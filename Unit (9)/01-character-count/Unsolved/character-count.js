// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
  // creating object that will hold counts of each letter
  let counts = {};

  // loop to go through each letter in the string
  for (let i = 0; i < str.length; i++) {

    // checking if the letter is already in the object as a key
    // if -> increment the value by 1
    // else -> add the letter as a key with a value of 1
    if (str[i] in counts) {
      counts[str[i]]++
    } else {
      counts[str[i]] = 1
    }
  }

  // return object with key value pairs of each letter from string
  return counts;
};
