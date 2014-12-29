// Take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern
// Return "Geometric" if it follows a geometric pattern. If it doesn't follow either pattern, return -1

function ArithGeo(arr) {

  if(arr.length >= 2) {
    var ariDiff = arr[1] - arr[0],
        geoDiff = arr[1] / arr[0],

        isArithmic = true,
        isGeometric = true;

    // arithmetic
    for (var i = 2; i < arr.length; i++) {
      if((arr[i] - arr[i-1]) !== ariDiff) {
        isArithmic = false;
        break;
      }
    }

    if(isArithmic) {
      return "Arithmetic";
    }

    //geometric
    for (var i = 2; i < arr.length; i++) {
      if((arr[i] / arr[i-1]) !== geoDiff) {
        isGeometric = false;
        break;
      }
    }

    if(isGeometric) {
      return "Geometric";
    }
  }

  // code goes here
  return -1;
}

ArithGeo([2, 6, 18, 54]);