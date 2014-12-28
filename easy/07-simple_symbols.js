function SimpleSymbols(str) {

  str = str.replace(/\+[a-zA-z]\+/g, "");

  var match = str.match(/[a-zA-z]/g) ? true : false;
  return match;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols("+d+=3=+s+");
