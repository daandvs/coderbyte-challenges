// Take the str parameter being passed and return the string true if the parameter is a
// palindrome, otherwise false. Punctuations and symbols should not affect wether the string is in fact
// a palindrome

function PalindromeTwo(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  return str.split("").reverse().join("") === str;
}

PalindromeTwo("A war at Tarawa!");
