export default function factorial(n, cache = {0: 1}) {
  if ( !(n in cache) ) {
    cache[n] = n * factorial(n - 1, cache)
  }

  return cache[n]
}
