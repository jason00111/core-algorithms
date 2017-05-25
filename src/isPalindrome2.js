function process (input) {
  const aCode = 97, zCode = 122,
        ACode = 65, ZCode = 90,
        upperOffset = aCode - ACode

  let output = '', charCode

  for (var i = 0; i < input.length; i++) {
    charCode = input.charCodeAt(i)

    if (charCode >= aCode && charCode <= zCode)
      output += String.fromCharCode(charCode)

    else if (charCode >= ACode && charCode <= ZCode)
      output += String.fromCharCode(charCode + upperOffset)
  }

  return output
}

export default function (input) {
  const processedInput = process(input)

  const midPoint = Math.floor(processedInput.length / 2)

  for (var i = 0; i < midPoint; i++) {
    if (processedInput[i] !== processedInput[processedInput.length - 1 - i])
      return false
  }

  return true
}
