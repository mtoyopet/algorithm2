// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const arrayA = stringA.split('').sort().join()
  const arrayB = stringB.split('').sort().join()

  return arrayA === arrayB
  // for (let i = 0; i < arrayA.length; i++) {
  //   if (arrayA[i] !== arrayB[i]) {
  //     return false
  //   }
  // }

  // return true
}

// function anagrams(stringA, stringB) {
//   let objectA = buildObjectMap(stringA)
//   let objectB = buildObjectMap(stringB)

//   for (let key in objectA) {
//     if (objectA[key] !== objectB[key]) { return false }
//   }

//   return true
// }

// function buildObjectMap(string) {
//   let object = {}
//   for (let key of string.split('')) {
//     if (!object[key]) {
//       object[key] = 1
//     } else {
//       object[key]++
//     }
//   }

//   return object
// }

module.exports = anagrams;
