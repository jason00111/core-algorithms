export default function makeChange({price, amountGiven}) {
  if (
    ![price, amountGiven].every(input => input !== undefined) ||
    ![price, amountGiven].every(Number.isInteger)
  )
    return 'Invalid input'

  const coins = [
    {name: 'quarters', value: 25},
    {name: 'dimes', value: 10},
    {name: 'nickels', value: 5},
    {name: 'pennies', value: 1}
  ]

  let change = amountGiven - price

  return coins.reduce((result, coin) => {
    result[coin.name] = Math.floor(change / coin.value)
    change %= coin.value
    return result
  }, {})
}
