// Take the str parameter being passed and return a compressed version of the string using
// the run-length encoding algorithm. Eg. wwwggopp would return 3w2g1o2p

function RunLength(str) {
  var i = 0,
      returnStr = "";

  while (i < str.length) {
    var j = 0;

    while (str[i] === str[i+j] && (i+j) < str.length) {
      j++;
    }

    returnStr += j + str[i];
    i = i + j;
  }

  return returnStr;
}

RunLength("wwwbbbw");
