// return the decimal form of the binary value

function BinaryConverter(str) {
  var output = 0;
  str.split("").forEach(function(elem, index, arr) {
    if(elem === "1") {
      output += Math.pow(2, (arr.length-1) - index);
    }
  });

  return output;
}

BinaryConverter("100101");