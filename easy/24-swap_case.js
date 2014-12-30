// take the str parameter and swap the case of each character.
// letters, numbers and symbols stay the way they are

function SwapCase(str) {
  // * means zero-or-more, and + means one-or-more
  var newstr = str.replace(/([A-Z]+)|([a-z]+)/g, function(match, p1, p2) {
    if(p1) {
      return p1.toLowerCase();
    }

    if(p2) {
      return p2.toUpperCase();
    }
  });

  return newstr;

}

SwapCase("Sup DUDE!!?");
