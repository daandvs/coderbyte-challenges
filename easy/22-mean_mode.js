function MeanMode(arr) {

  var modeCache = {},
      mode = {
        count: 0,
        value: 0
      },
      mean = arr[Math.floor(arr.length / 2)];

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

MeanMode([5, 3, 3, 3, 1]);
