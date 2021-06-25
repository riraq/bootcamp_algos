// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr) {

  for (let i = 0; i < arr.length; i++) {
    let arrValue = arr[i];

    if (arrValue % 3 === 0 && arrValue % 5 !== 0) {
      console.log("Fizz")
    } else if (arrValue % 5 === 0 && arrValue % 3 !== 0) {
      console.log("Buzz")
    } else if (arrValue % 5 === 0 && arrValue % 3 === 0) {
      console.log("Fizz Buzz")
    } else {
      console.log(arrValue)
    }
  }
};
