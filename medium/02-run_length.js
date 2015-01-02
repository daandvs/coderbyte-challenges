function RunLength(str) {
  var count = 1,
      prev = str[0],
      returnStr = "";

  for (var i = 1; i <= str.length; i++) {
    var value = str[i];

    if(value !== prev) {
      returnStr += count + prev;
      count = 1;
    }else {
      count++;
    }

    prev = value;
  }

  // code goes here
  return returnStr;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
RunLength("aabbcde");
