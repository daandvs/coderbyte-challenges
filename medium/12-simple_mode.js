function SimpleMode(arr) {
  var mode = -1,
      modeCount = 0;

  for (var i = 0; i < arr.length - modeCount; i++) {
    var num = arr[i],
        tempCount = 0;

    for (var j = i+1; j < arr.length - modeCount; j++) {
      if(num === arr[j]) {
        tempCount++;
      }
    }

    if(tempCount > modeCount) {
      modeCount = tempCount;
      mode = num;
    }
  }

  return mode;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SimpleMode([3,4,1,6,10]);
