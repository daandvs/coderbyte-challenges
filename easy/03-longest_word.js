// Take the sen parameter being passed and return the largest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.

function LongestWord(sen) {
  var arr = sen.split(" "),
      longest = "",
      temp = "";

  for(var i = 0; i < arr.length; i++) {
    temp = arr[i].replace(/[^a-zA-Z]/g, "").trim();
    if(temp.length > longest.length) {
      longest = temp;
    }
  }

  sen = longest;
  return sen;

}

LongestWord("which one is the!! longest word?");