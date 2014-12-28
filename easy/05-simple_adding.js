// Add up all the numbers from 1 to num

function SimpleAdding(num) {
  function add(num) {
    if(num === 1) {
      return num;
    }

    return num + add(num-1);
  }

  var temp = num + add(num-1);
  num = temp;
  return num;
}

SimpleAdding(8);