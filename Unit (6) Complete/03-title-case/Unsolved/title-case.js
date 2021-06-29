// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
  // splits the sentence into items in an array by word using spaces to separate
  let splitString = str.split(' ');
  // empty array as a placeholder for each word after being capitalized
  let resultWord = [];

  // loops through each word in the array
  for(let i = 0; i < splitString.length; i++){
    // copies word from the array based on iteration
    let word = splitString[i];
    // copies first letter from the currently iterated word
    let firstLetter = word[0];

    // concatenates capitalized letter with the rest of the word and pushes to
    // the new array
    resultWord.push(firstLetter.toUpperCase() + word.substring(1))
  }

  // joins the array into a string and adds spaces between each word
  return resultWord.join(' ')
};
