import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture2'

describe('collatzConjecture()', function(){

  it('should be a function', function(){
    expect(collatzConjecture).to.be.a('function')
  })

  it('handles invalid inputs', function(){
    expect(collatzConjecture(0)).to.equal('Invalid input')
    expect(collatzConjecture(-1)).to.equal('Invalid input')
    expect(collatzConjecture(1.2)).to.equal('Invalid input')
    expect(collatzConjecture('a')).to.equal('Invalid input')
    expect(collatzConjecture(true)).to.equal('Invalid input')
  })

  it('collatzConjecture(1) returns [1]', function(){
    expect(collatzConjecture(1)).to.deep.equal([1])
  })

  it('collatzConjecture(7) returns the correct result', function(){
    expect(collatzConjecture(7)).to.deep.equal([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
  })

})
