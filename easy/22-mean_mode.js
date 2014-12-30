// take the array of numbers stored in arr and return 1 if the mode equals the mean,
// 0 if they don't equal each other

function MeanMode(arr) {

  var modeCache = {},
      mode = {
        count: 0,
        value: 0
      },
      mean = arr.reduce(function(previousValue, currentValue, index, arr) {
        return previousValue + currentValue;
      }) / arr.length;

  for (var i = 0; i < arr.length; i++) {
    if(!modeCache[arr[i]]) {
      modeCache[arr[i]] = 0;
    }

    modeCache[arr[i]] = modeCache[arr[i]] + 1;

    if(modeCache[arr[i]] > mode.count) {
      mode.count = modeCache[arr[i]];
      mode.value = arr[i];
    }
  }

  if(mean === mode.value) {
    return 1;
  }

  return 0;
}

MeanMode([4, 4, 4, 6, 2]);
