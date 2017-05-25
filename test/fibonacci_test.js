import { expect } from 'chai'
import fibonacci from '../src/fibonacci2'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('handles invalid inputs', function(){
    expect(fibonacci(1.2)).to.equal('Invalid input')
    expect(fibonacci('a')).to.equal('Invalid input')
    expect(fibonacci(true)).to.equal('Invalid input')
  })

  it('fibonacci(0) returns an empty array', function(){
    expect(fibonacci(0)).to.deep.equal([])
  })

  it('fibonacci(1) starts with 0', function(){
    expect(fibonacci(1)).to.deep.equal([0])
  })

  it('fibonacci(10) returns an array of the first 10 fibonacci numbers starting with 0', function(){
    const result = fibonacci(10)

    expect(result).to.be.an('array')
    expect(result).to.have.length(10)
    expect(result).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })

})
