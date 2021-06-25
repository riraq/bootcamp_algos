// Write code to return the largest number in the given array

var maxNum = function (arr) {

  let maxNumber;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      maxNumber = arr[i]
    } else if (arr[i] > maxNumber) {
      maxNumber = arr[i]
    };
  };
  
  return maxNumber;
};
