// Take the num parameter being passed and return the number of hours and minutes the parameter converts.
// (ie. if num = 63 then the output should be 1:3). Seperate the number of hours and minutes with a colon.

function TimeConvert(num) {
  var hours = Math.floor(num / 60),
      minutes = num % 60;

  return hours + ":" + minutes;
}

TimeConvert(60);