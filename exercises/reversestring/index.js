// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed
  }, '')

  // let array = []
  // str.split('').forEach((word) => {
  //   array.unshift(word)
  // })
  // return array.join("")

  // return str.split('').reverse().join('')

  // let reversed = ''
//   for (let char of str) {
//     reversed = char + reversed
//   }

//   return reversed
}

module.exports = reverse;
