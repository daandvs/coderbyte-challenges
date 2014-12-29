// Take the array of numbers stored in arr and return the second lowest and second greatest numbers,
// respectively , seperated by a space.

function SecondGreatLow(arr) {

  arr.sort(function(a, b) {
    return a - b;
  });

  var unique = [],
      exist = {};

  arr.forEach(function(current) {
    if(!exist[current]) {
      unique.push(current);
      exist[current] = true;
    }
  });

  if(unique.length === 1) {
    return unique[0] + " " + unique[0];
  }

  return unique[1] + " " + unique[unique.length-2];
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow([80, 80]);