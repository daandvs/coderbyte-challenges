// take the num parameter being passed and return the factorial of it (ie. if num = 4
// return (4 * 3 * 2 * 1)).

function FirstFactorial(num) {
  for(var i = num-1; i >= 1; i--) {
    num *= i;
  }

  return num;
}

FirstFactorial(8);