// Take both parameters being passed and return the string true if a portion
// of str1 characters can be rearranged to match str2, otherwise return false

function StringScramble(str1,str2) {

  var arr = str1.split("");

  for (var i = 0; i < str2.length; i++) {
    var index = arr.indexOf(str2[i]);

    if(index === -1) {
      return false;
    }else {
      arr.splice(index, 1);
    }

  }
  return true;

}

StringScramble("winn33er", "winner");
