// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hash = {}
  str.split('').forEach((element) => {
    if (!(element in hash)) {
      hash[element] = 1
    } else {
      hash[element] += 1
    }
  })

  let num = 0
  let max = ''
  for (const key in hash) {
    if (hash[key] > num) { 
      num = hash[key]
      max = key
    }
  }

  return max
}

module.exports = maxChar;
