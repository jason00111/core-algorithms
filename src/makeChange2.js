export default function makeChange({price, amountGiven}) {
  if (
    price === undefined ||
    amountGiven === undefined
  )
    return 'Invalid input'

  if (
    typeof price !== 'number' ||
    typeof amountGiven !== 'number'
  )
    return 'Invalid input'

  let change = amountGiven - price

  const quarters = Math.floor(change / 25)

  change = change % 25

  const dimes = Math.floor(change / 10)

  change = change % 10

  const nickels = Math.floor(change / 5)

  change = change % 5

  const pennies = change

  return {
    quarters,
    dimes,
    nickels,
    pennies
  }
}
