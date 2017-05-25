export default function setUnion (setA, setB) {
  if ( !Array.isArray(setA) || !Array.isArray(setB) )
    return 'Invalid input'

  const result = []

  setB.forEach(entry => {
    if ( !setA.includes(entry) )
      result.push(entry)
  })

  return result
}
