// Take the str parameter being passed and return the first word with the greatest number of repeated
// letters. If there are no words with repeated letters return -1

function LetterCountI(str) {

  var arr = str.split(" "),
      greatestCount = 1,
      greatestWord = "";

  for (var i = 0; i < arr.length; i++) {
    // get rid of punc
    var letters = arr[i].replace(/[^a-zA-Z]/g, "").split("");

    for (var j = 0; j < letters.length; j++) {
      var count = arr[i].match(new RegExp(letters[j], "g")).length;
      if(count > greatestCount) {
        greatestCount = count;
        greatestWord = arr[i];
      }
    }
  }

  if(greatestWord !== "") {
    return greatestWord;
  }

  return -1;
}

LetterCountI("I lied before");