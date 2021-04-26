// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.

// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str) {
  let result = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }

  return result
}

// function capitalize(str) {
//   const array = []
//   for (let word of str.split(' ')) {
//     array.push(word[0].toUpperCase() + word.slice(1))
//   }

//   return array.join(' ')
// }

// function capitalize(str) {
//   const array = str.split(' ')
//   const parentArray = []
//   for (let word of array) {
//     const wordsArray = word.split('')
//     let childArray = []

//     for (let i = 0; i < wordsArray.length; i++) {
//       if (i === 0) {
//         childArray.push(wordsArray[i].toUpperCase())
//       } else {
//         childArray.push(wordsArray[i])
//       }
//     }

//     parentArray.push(childArray.join(''))
//   }
//   return parentArray.join(' ')
// }

module.exports = capitalize;
