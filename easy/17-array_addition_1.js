function ArrayAdditionI(arr) {

  arr.sort(function(a, b) {
    return a - b;
  });

  var greatest = arr[arr.length-1];

  for (var i = 0; i < arr.length-1; i++) {
    var newArr = arr.slice(i, arr.length-1);

    for (var j = i+1; j < arr.length-1; j++) {
      var result = newArr.reduce(function(prev, current, index, array) {
        return prev + current;
      });

      if(result === greatest) {
        return true;
      }else {
        newArr.splice(j, 1);
      }
    }
  }

  return false;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI([4, 6, 23, 10, 1, 3]);