// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  // setting a variable to use for counting
  let count = 0;

  // for loop goes through each letter of the string based on the length of the string
  for (let i = 0; i < str.length; i++) {
    // setting variable to the single letter being tested as a vowel or not
    let strVal = str[i]

    // using switch case to evaluate the letter against each vowel
    // if it matches, count increases; otherwise it continues to the next letter
    // added toLowerCase method since the switch case is case sensitive
    switch (strVal.toLowerCase()) {
      case 'a':
        count++
        break;
      case 'e':
        count++
        break;
      case 'i':
        count++
        break;
      case 'o':
        count++
        break;
      case 'u':
        count++
        break;
      default:
        break;
    }
  }

  return count;
};
