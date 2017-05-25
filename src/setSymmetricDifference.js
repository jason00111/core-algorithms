import setComplement from './setComplement'
import setUnion from './setUnion'

export default function setSymmetricDifference (setA, setB) {
  if ( !Array.isArray(setA) || !Array.isArray(setB) )
    return 'Invalid input'

  return setUnion(setComplement(setB, setA), setComplement(setA, setB))
}
