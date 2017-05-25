export default function setUnion (setA, setB) {
  if ( !Array.isArray(setA) || !Array.isArray(setB) )
    return 'Invalid input'

  const result = []

  setA.forEach(entry => {
    if ( setB.includes(entry) )
      if ( !result.includes(entry) )
        result.push(entry)
  })

  return result
}
