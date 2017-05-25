const initialCache = {
  0: [],
  1: [0],
  2: [0, 1]
}

export default function fibonacci(n, cache = initialCache) {
  if ( !Number.isInteger(n) ) return 'Invalid input'

  if ( !(n in cache) ) {
    const prev = fibonacci(n - 1, cache)

    cache[n] = prev.concat( prev[prev.length - 1] + prev[prev.length - 2] )
  }

  return cache[n]
}
