export default function collatzConjecture(n, cache = { 1: [1] }) {
  if ( !Number.isInteger(n) || n <= 0 )
    return 'Invalid input'

  if ( !(n in cache) ) {
    let next

    if (n % 2 === 0)
      next = n / 2
    else
      next = n * 3 + 1

    cache[n] = [n].concat(collatzConjecture(next))
  }

  return cache[n]
}
