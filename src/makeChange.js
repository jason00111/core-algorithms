export default function makeChange({price, amountGiven}) {
  if (price === undefined || amountGiven === undefined) {
    return 'Invalid input'
  }

  let change = amountGiven - price

  const result = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

  while (change - 25 >= 0) {
    change -= 25
    result.quarters++
  }

  while (change - 10 >= 0) {
    change -= 10
    result.dimes++
  }

  while (change - 5 >= 0) {
    change -= 5
    result.nickels++
  }

  while (change - 1 >= 0) {
    change -= 1
    result.pennies++
  }

  return result
}
