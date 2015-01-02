// Take the strArr parameter being passed which will be an array of integers ranging from 1...n
// and the letter E and return the correct subset based on the following rules:

// Input will be in format ["I", "I", "E", "I", "E", ..., "I"] where the I's stand for integers and the E
// means take out the smallest integer currently in the whole set.

function OffLineMinimum(strArr) {
  var indexes = [],
      output = [];

  for (var i = 0; i < strArr.length; i++) {
    if(strArr[i] === "E") {
      var temp = strArr.slice(0, i),
          min = null,
          currentIndex = null;

      temp.forEach(function(elem, index, arr) {
        var value = Number(elem),
            used = indexes.indexOf(index) !== -1;

        if(elem !== "E") {
          if(!min && !used) {
            min = value;
            currentIndex = index;
          } else if(!used && Number(elem) < min) {
            min = value;
            currentIndex = index;
          }
        }
      });

      if(min !== null) {
        output.push(min);
        indexes.push(currentIndex);
      }
    }

  }

  return output;

}

OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]);
