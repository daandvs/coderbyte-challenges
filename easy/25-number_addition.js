// take the str parameter, search for all the numbers in the string, add them together, then
// return the final number

function NumberAddition(str) {
  var numbers = str.match(/(\d)+/g);

  if(!numbers) {
    return 0;
  }

  return numbers.reduce(function(previousValue, currentValue, index, arr) {
    return Number(previousValue) + Number(currentValue);
  });
}

NumberAddition("55Hello5");
