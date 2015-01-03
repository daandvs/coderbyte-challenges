function ArrayAddition(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });

  var loopCount = 0;

  var greatest = arr[arr.length-1];

  for (var i = 0; i < arr.length-1; i++) {
    loopCount++;

    var newArr = arr.slice(i, arr.length-1),
        values = [];

    for (var j = i; j < newArr.length; j++) {
      loopCount++;
      var sum = arr[i] + arr[j];
      if(sum === greatest) {
        console.log(loopCount);
        return true;
      }

      for (var k = 0; k < values.length; k++) {
        loopCount++;
        sum += values[k];

        if(sum === greatest) {
          console.log(loopCount);
          return true;
        }
      }

      values.push(arr[j+1]);
    }
  }

  return false;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 40]);
