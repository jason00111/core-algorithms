export default function fibonacci(n) {
  if ( !Number.isInteger(n) ) return 'Invalid input'

  if (n === 0) return []
  if (n === 1) return [0]
  if (n === 2) return [0, 1]

  const prev = fibonacci(n - 1)

  return prev.concat( prev[prev.length - 1] + prev[prev.length - 2] )
}
