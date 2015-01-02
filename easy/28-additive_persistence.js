// take the num parameter being passed which will always be a positive integer and return its addivitive
// persistence which it the number of times you must add the digits in num unit you reach a single digit.

function AdditivePersistence(num) {

  var arr = num.toString().split(""),
      count = 0;

  while(arr.length > 1) {
    count++;

    num = arr.reduce(function(prev, next, array) {
      return Number(prev) + Number(next);
    });

    arr = num.toString().split("");
  }

  return count;
}

AdditivePersistence(19);
