function isLetter (character) {
  return character.charCodeAt(0) >= 97 &&
    character.charCodeAt(0) <= 122
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
