import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function(){

  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })

  it('handles invalid inputs', function(){
    expect(setUnion([1, 2])).to.equal('Invalid input')
    expect(setUnion(1)).to.equal('Invalid input')
    expect(setUnion('a')).to.equal('Invalid input')
    expect(setUnion(true)).to.equal('Invalid input')
  })

  it('setUnion(a, b) returns the union of sets a and b', function(){
    const a = [1, 2, 3, 4]
    const b = [5, 6, 7, 8]

    expect(setUnion(a, b)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('there are no duplicates in the result', function(){
    const a = [1, 1, 1, 2]
    const b = [1, 2, 3]

    expect(setUnion(a, b)).to.deep.equal([1, 2, 3])
  })


  it('setUnion(a, b) returns the union of sets a and b', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]

    expect(setUnion(a, b)).to.deep.equal([1, 2, 3, 4, 6, 8])
  })
})
