// Take the str parameter being passed and return the string true if the parameter is a palindrome.
// otherwise return the string false

function Palindrome(str) {
  var temp = str.replace(/\s+/g, "");

  return temp === temp.split("").reverse().join("");
}

Palindrome("argument");