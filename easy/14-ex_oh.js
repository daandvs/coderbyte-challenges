// Take the str parameter being passed and return the string true if there is an equal number
// of x's and o's, otherwise return the string false.

function ExOh(str) {
  var x = str.match(/x/g),
      o = str.match(/o/g);

  x = x ? x.length : 0;
  o = o ? o.length : 0;

  if(x === o) {
    return true;
  }

  return false;
}

ExOh("xoooxxxxooxo");