// Take the array of numbers stored in arr and return the string true if any combination
// of numbers in the array can be added up to equal the largest number in the array, otherwise return false

function ArrayAddition(arr) {
  arr.sort(function(a, b) {
    return a- b;
  });

  var greatest = arr.pop();

  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      var sum = arr[i] + arr[j],
          k = j - i;

      if(sum === greatest) {
        return true;
      }

      while (k > 1) {
        k--;
        sum += arr[k];

        if(sum === greatest) {
          return true;
        }
      }
    }
  }

  return false;
}

ArrayAddition([5,7,16,1,2]);
