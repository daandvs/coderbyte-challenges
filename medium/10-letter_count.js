// take the str parameter being passed and return the first word with the greatest number of repeated
// letters.

function LetterCount(str) {
  var arr = str.split(" "),
      index = 0,
      count = 1;

  arr.forEach(function(elem, elemIndex) {
    var word = elem.replace(/[^a-zA-Z]/g, "");
    for (var i = 0; i < word.length; i++) {
      var regex = new RegExp(word[i], 'gi'),
          letterCount = word.match(regex).length;

      if(count < letterCount) {
        index = elemIndex;
        count = letterCount;
      }
    }
  });

  if(count === 1) {
    return -1;
  }

  return arr[index];

}

LetterCount("No words");
