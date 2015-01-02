// return the numth prime number

function PrimeMover(num) {
  var prime = 2;

  for (var i = 1; i < num; i++) {
    var looping = true;

    while(looping) {
      prime++;

      var isPrime = true;
      for (var j = 2; j < prime; j++) {
        if(prime % j === 0) {
          isPrime = false;
          break;
        }
      }

      if(isPrime) {
        looping = false;
      }
    }
  }

  return prime;
}

PrimeMover(16);
