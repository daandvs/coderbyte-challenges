// Take the str parameter being passed and return the number of vowels the string contains

function VowelCount(str) {
  var match = str.match(/[aAeEiIoOuU]/g);

  return match ? match.length : 0;
}

VowelCount("All cows eat grass");