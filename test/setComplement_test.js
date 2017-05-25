import { expect } from 'chai'
import setComplement from '../src/setComplement'

describe('setComplement()', function(){

  it('should be a function', function(){
    expect(setComplement).to.be.a('function')
  })

  it('handles invalid inputs', function(){
    expect(setComplement([1, 2])).to.equal('Invalid input')
    expect(setComplement(1)).to.equal('Invalid input')
    expect(setComplement('a')).to.equal('Invalid input')
    expect(setComplement(true)).to.equal('Invalid input')
  })

  it('setComplement(a, b) returns the complement of a with respect to b (entries which are in b but not in a)', function(){
    const a = [1, 2, 3, 4]
    const b = [5, 6, 7, 8]

    expect(setComplement(a, b)).to.deep.equal([5, 6, 7, 8])
  })

  it('setComplement(a, b) returns the complement of a with respect to b', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]

    expect(setComplement(a, b)).to.deep.equal([6, 8])
  })
})
