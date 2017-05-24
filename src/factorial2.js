const cache = {
  0: 1
}

export default function factorial(n) {
  if ( !(n in cache) ) {
    cache[n] = n * factorial(n - 1)
  }

  return cache[n]
}
