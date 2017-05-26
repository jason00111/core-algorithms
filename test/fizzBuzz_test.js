import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('returns an array of length 100', function(){
    const result = fizzBuzz()
    expect(result).to.be.an('array')
    expect(result).to.have.length(100)
  })

  it('entries at positions which are multiples of 3 and 5 are FizzBuzz', function(){
    const multiplesOf3and5 = fizzBuzz()
      .filter( (element, index) =>
        (index + 1) % 3 === 0 && (index + 1) % 5 === 0
      )

    expect(multiplesOf3and5.every(
      element => element === 'FizzBuzz'
    )).to.be.true
  })

  it('entries at positions which are multiples of 3 and not 5 are Fizz', function(){
    const multiplesOf3not5 = fizzBuzz()
      .filter( (element, index) =>
        (index + 1) % 3 === 0 && (index + 1) % 5 !== 0
      )

    expect(multiplesOf3not5.every(
      element => element === 'Fizz'
    )).to.be.true
  })

  it('entries at positions which are multiples of 5 and not 3 are Buzz', function(){
    const multiplesOf5not3 = fizzBuzz()
      .filter( (element, index) =>
        (index + 1) % 3 !== 0 && (index + 1) % 5 === 0
      )

    expect(multiplesOf5not3.every(
      element => element === 'Buzz'
    )).to.be.true
  })

  it('entries at positions which are not multiples of 5 or 3 are numbers corresponding to their position', function(){
    const notMultiplesOf5or3 = fizzBuzz()
      .map( (element, index) => ({element, index}) )
      .filter( ({index}) =>
        (index + 1) % 3 !== 0 && (index + 1) % 5 !== 0
      )

    expect(notMultiplesOf5or3.every(
      ({element, index}) => element === index + 1
    )).to.be.true
  })

})
