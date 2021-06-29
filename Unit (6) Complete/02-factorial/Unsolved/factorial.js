// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {

  // if num > 1; process factiorial function;
  // else return 1
  if (num > 1) {
    // 1 multiplied by anything is the same, so this is a good starting point
    // and let's me skip the last factorial multiplication
    let result = 1;

    for (let i = num; i > 1; i--) {
      result = i * result
    }

    // once for loop finishes, it returns the factorial
    return result

  } else {
    return 1;
  }
};