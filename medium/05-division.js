// Take both parameters being passed and return the greatest common factor

function Division(num1,num2) {
  var lowest = num1;

  if(num2 < num1) {
    lowest = num2;
  }

  for (var i = lowest; i > 1; i--) {
    if(num2 % i === 0 && num1 % i === 0) {
      return i;
    }
  }

  return 1;
}

Division(36, 54);
