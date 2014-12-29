// Take the array of numbers stored in arr and return the string true if any combination
// of numbers in the array can be added up to equal the largest number in the array, otherwise return false

function ArrayAdditionI(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });

  var greatest = arr[arr.length-1];

  for (var i = 0; i < arr.length-1; i++) {
    var newArr = arr.slice(i, arr.length-1),
        values = [];

    for (var j = i; j < newArr.length; j++) {
      var sum = arr[i] + arr[j];
      if(sum === greatest) {
        return true;
      }

      for (var k = 0; k < values.length; k++) {
        sum += values[k];

        if(sum === greatest) {
          return true;
        }
      }

      values.push(arr[j+1]);
    }
  }

  return false;
}

ArrayAdditionI([3,5,-1,8,12]);