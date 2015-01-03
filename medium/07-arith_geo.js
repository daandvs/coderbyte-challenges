// Take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern
// Return "Geometric" if it follows a geometric pattern. If it doesn't follow either pattern, return -1

function ArithGeoII(arr) {

  var isArith = true,
      arithDiff = arr[1] - arr[0],
      isGeo = true,
      geoDiff = arr[1] / arr[0];

  for (var i = 2; i < arr.length; i++) {
    if(isArith) {
      isArith = arr[i] - arr[i-1] === arithDiff;
    }

    if(isGeo) {
      isGeo = arr[i] % geoDiff === 0;
    }

    if(!isArith && !isGeo) {
      break;
    }
  }

  if(isArith) {
    return "Arithmetic";
  }else if(isGeo) {
    return "Geometric";
  }

  return -1;
}

ArithGeoII([1, 2, 3, 100]);
