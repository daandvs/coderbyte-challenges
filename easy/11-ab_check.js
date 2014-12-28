// Take the str parameter being passed and return the string true if the character a and b are separated by
// exactly 3 places anywhere in the string at least once.

function ABCheck(str) {
  var match = str.match(/a...b/);
  return match ? true : false;
}

ABCheck("bzzza");