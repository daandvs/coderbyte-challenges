// Take the num parameter being passed which will be an integer and return true if it's a power of two
// return false if not.

function PowersofTwo(num) {
  while (num % 2 === 0) {
    num = num / 2;
  }

  if(num > 1) {
    return false;
  }

  return true;
}

PowersofTwo(22);
