// Take the str parameter being passed and return the first word with the greatest number of repeated
// letters. If there are no words with repeated letters return -1

function LetterCountI(str) {

  var arr = str.split(" "),
      greatestCount = 0,
      greatestWord = "";

  for (var i = 0; i < arr.length; i++) {
    // get rid of punc
    var tempArr = arr[i].replace(/[^a-zA-Z]/g, "").split("");

    for (var j = 0; j < tempArr.length; j++) {
      var count = 0,
          letter = tempArr[j].toLowerCase();

      for (var k = 0; k !== j && k < tempArr.length; k++) {
        if(tempArr[k] === letter) {
          count++;
        }

        if(count > greatestCount) {
          greatestCount = count;
          greatestWord = arr[i];
        }
      }
    }
  }

  if(greatestWord !== "") {
    return greatestWord;
  }

  return -1;
}

LetterCountI("Today, is the greatest day ever!");