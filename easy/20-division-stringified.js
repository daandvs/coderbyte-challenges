function DivisionStringified(num1,num2) {

  //var division = Math.round(num1 / num2).toString(),
  //    parts = Math.floor(division.length / 3),
  //    partsArr = [];
  //
  //if(parts !== 0) {
  //  for (var i = parts; i >= parts; i--) {
  //    partsArr.unshift(division.substr(i-4, 3));
  //  }
  //}
  //
  //
  //var mod = division.length % 3;
  //if(mod > 0) {
  //  partsArr.unshift(division.substr(0, division.length % 3));
  //}
  //
  //return partsArr.toString();

  return Math.round(num1 / num2).toLocaleString();
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(1000000, 3);
