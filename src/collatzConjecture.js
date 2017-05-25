export default function collatzConjecture(n) {
  if ( !Number.isInteger(n) || n <= 0 )
    return 'Invalid input'

  if (n === 1) return [1]

  let next

  if (n % 2 === 0)
    next = n / 2
  else
    next = n * 3 + 1

  return [n].concat(collatzConjecture(next))
}
