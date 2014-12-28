// Take the str parameter being passed and return the string with the letters in alphabetical order.

function AlphabetSoup(str) {

  return str.split("").sort().join("");
}

AlphabetSoup("coderbyte");