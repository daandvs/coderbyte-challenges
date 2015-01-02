// Take the num parameter being passed and return the string true if the parameter is a prime number
// otherwise return the string false

function PrimeTime(num) {

  for (var i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}

PrimeTime(110);
