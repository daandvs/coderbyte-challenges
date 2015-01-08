// Take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number

function CaesarCipher(str,num) {
  var returnStr = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i].charCodeAt(0);

    // check is char a-z / A-Z
    if((char >= 97 && char <= 122)) {
      char += num;

      if(char > 122) {
        char -= 26;
      }
    }else if((char >= 65 && char <= 90)) {
      char += num;

      if(char > 90) {
        char -= 26;
      }
    }

    returnStr += String.fromCharCode(char);
  }

  // code goes here
  return returnStr;

}

CaesarCipher("Hello, it's me", 2);
