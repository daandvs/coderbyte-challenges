// Take the str parameter being passed and return the number of words the string contains
// (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces.

function WordCount(str) {
  var arr = str.split(" ");

  return arr.length;
}

WordCount("hello world");