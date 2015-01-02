// Take the strArr parameter being passed which will be an array of integers ranging from 1...n
// and the letter E and return the correct subset based on the following rules:

// Input will be in format ["I", "I", "E", "I", "E", ..., "I"] where the I's stand for integers and the E
// means take out the smallest integer currently in the whole set.

function OffLineMinimum(strArr) {
  var output = [],
      collection = [];

  strArr.forEach(function(elem, index, arr) {
    if(isNaN(elem)) {
      output.push(collection.sort(function(a, b) {
        return a < b;
      }).pop());
    }else {
      collection.push(elem);
    }
  });

  return output.join(",");

}

OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]);
