// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const reverse = require("../reversestring");

function palindrome(str) {
  return str.split('').every((element, index) => {
    return element === str[str.length - index -1]
  })
  // const reversedStr = str.split('').reduce((reversed, character) => {
  //   return character + reversed
  // }, '')

  // return reversedStr === str
}

module.exports = palindrome;
