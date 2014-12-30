// Insert dashes between each two odd numbers in str

function DashInsert(str) {

  var output = str[0];

  for (var i = 1; i < str.length; i++) {

    if(Number(str[i-1]) % 2 !== 0 && Number(str[i]) % 2 !== 0) {
      output += "-";
    }

    output += str[i];
  }

  return output;

}

DashInsert("454793");
