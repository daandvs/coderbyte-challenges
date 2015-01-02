// take the array of string stored in strArr and return the third largest word within it.

function ThirdGreatest(strArr) {
  strArr.sort(function(a, b) {
    return a.length < b.length;
  });

  return strArr[2];
}

ThirdGreatest(["hello", "world", "after", "all"]);
