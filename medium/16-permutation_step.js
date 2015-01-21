// take the num parameter being passed and return the next number greater than
// num using the same digits

function PermutationStep(num) {

  var arr = num.toString().split(""), // first make array of every digit in num
    loop = true, // set loop variable so we can stop the first while loop
    n = i = arr.length - 1; // set length and position vars


  // change two values's position in array
  function swap(arr, i1, i2) {
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  }

  while (loop && i > 0) {
    // loop array from last index to 0
    // until we find a digit that is smaller then it's right neighbour
    if (Number(arr[i - 1]) < Number(arr[i])) {
      // we have found the index which we can start with
      // to construct the next number so stop looping
      loop = false;

      // swap positions
      swap(arr, i - 1, i);

      // loop from current index to end of array
      do {

        while (arr[i] > arr[i + 1]) {
          // while digit at current index is greater than digit at next index
          // loop from current index until end of array
          for (var j = i; j < n; j++) {
            // swap digits if digit at current index is greater than digit at next index
            if (arr[j] > arr[j + 1]) {
              swap(arr, j, j + 1);
            }
          }
        }

        // digit at current index is smaller than digit at next index so
        // we can move the index to the right and repeat steps until we have
        // reached the end of the array
        i++;
      } while (i < n);
    }

    i--;
  }

  // if there's no digit that is smaller than it's right neighboor
  // loop is still true and we return -1
  if (loop) {
    return -1;
  }

  return Number(arr.join(""));
}

PermutationStep(12453);
