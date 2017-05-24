function isLetter (character) {
  const aCode = 97, zCode = 122

  return character.charCodeAt(0) >= aCode &&
    character.charCodeAt(0) <= zCode
}

String.prototype.reverse = function () {
  return this
    .split('')
    .reverse()
    .join('')
}

String.prototype.filter = function (callback) {
  return this
    .split('')
    .filter(callback)
    .join('')
}

export default function isPalindrome(input) {
  const processedInput = input
    .toLowerCase()
    .filter(isLetter)

  return processedInput === processedInput.reverse()
}
