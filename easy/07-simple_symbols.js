function SimpleSymbols(str) {
  str = str.replace(/\+/g, "++");
  str = str.replace(/\+[A-Za-z]\+/g, "");

  var match = str.match(/[A-Za-z]/g) ? false : true;
  return match;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols("+d+d+d+d+");
