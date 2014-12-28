// Take the str parameter being passed and determine if it is an acceptable sequence by either returning
// the string true or false. The str parameter will be composed of + and = symbols with several letters between them
// (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol.
// So the example to would return false.

function SimpleSymbols(str) {
  str = str.replace(/\+/g, "++");
  str = str.replace(/\+[A-Za-z]\+/g, "");

  var match = str.match(/[A-Za-z]/g) ? false : true;
  return match;
}

SimpleSymbols("+d+d+d+d+");
