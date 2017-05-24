import { expect } from 'chai'
import factorial from '../src/factorial3'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('0! is 1', function(){
    expect(factorial(0)).to.be.equal(1)
  })

  it('1! is 1', function(){
    expect(factorial(1)).to.be.equal(1)
  })

  it('9! is 362880', function(){
    expect(factorial(9)).to.be.equal(362880)
  })

})
