// Insert dashes between each two odd numbers in str

function DashInsert(str) {

  var output = "",
      prevOdd = false,
      isOdd = false;

  for (var i = 0; i < str.length; i++) {

    if(Number(str[i]) % 2 !== 0) {
      isOdd = true;
    }else {
      isOdd = false;
    }

    if(prevOdd && isOdd) {
      output += "-";
    }

    output += str[i];
    prevOdd = isOdd;
  }

  return output;

}

DashInsert("000");
