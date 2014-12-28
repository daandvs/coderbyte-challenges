// Take the str parameter being passed and capitalize the first letter of each word.
// Words will be seperated by only one space

function LetterCapitalize(str) {
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    var first = arr[i].substr(0, 1).toUpperCase(),
        rest = arr[i].substr(1, arr[i].length);

    arr[i] = first.concat(rest);
  }

  str = arr.join(" ");
  return str;
}

LetterCapitalize("hello world");
