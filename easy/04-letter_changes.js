// Take the str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function LetterChanges(str) {
  var temp = "";
  for(var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);

    // check for alphabet
    if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      if(charCode === 90 || charCode === 122) {
        charCode -= 25;
      }else {
        charCode++;
      }
    }

    if(charCode === 97 || charCode === 101 || charCode === 105 || charCode === 111 || charCode === 117) {
      charCode -= 32;
    }

    temp += String.fromCharCode(charCode);
  }

  str = temp;
  return str;
}

LetterChanges('This is a string a');
