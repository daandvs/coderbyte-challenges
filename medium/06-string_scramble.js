// Take both parameters being passed and return the string true if a portion
// of str1 characters can be rearranged to match str2, otherwise return false

function StringScramble(str1,str2) {


  for (var i = 0; i < str2.length; i++) {
    if(str1.indexOf(str2[i]) === -1) {
      return false;
    }

  }
  return true;

}

StringScramble("rkqodlw", "world");
