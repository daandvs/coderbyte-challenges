// Take the str parameter being passed and return the string true if the parameter is a
// palindrome, otherwise false. Punctuations and symbols should not affect wether the string is in fact
// a palindrome

function PalindromeTwo(str) {
  str = str.replace(/[^a-z]/gi, "").toLowerCase();
  var arr = str.split("").reverse(),
      isPalindrome = true

  for (var i = 0; i < arr.length; i++) {
    if(arr[i] !== str[i]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

PalindromeTwo("A war at Tarawa!");
