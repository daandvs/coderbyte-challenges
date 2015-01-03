function ArithGeoII(arr) {

  // arith
  var diff = arr[1] - arr[0],
      arith = true;
  for (var i = 2; i < arr.length; i++) {
    if(arr[i] - arr[i-1] !== diff) {
      arith = false;
      break;
    }
  }

  if(arith) {
    return "Arithmetic";
  }

  // geo
  diff = arr[1] / arr[0];
  var geo = true;
  for (var i = 2; i < arr.length; i++) {
    if(arr[i] % diff !== 0) {
      geo = false;
      break;
    }
  }

  if(geo) {
    return "Geometric";
  }


  return -1;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ArithGeoII([2, 6, 18, 54]);
