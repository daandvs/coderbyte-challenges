// take the str parameter being passed in and return the string in reversed order

function FirstReverse(str) {
  str = str.split("").reverse().join("");
  return str;
}

FirstReverse("This should be a reversed string");