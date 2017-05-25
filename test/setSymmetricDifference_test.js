import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe('setSymmetricDifference()', function(){

  it('should be a function', function(){
    expect(setSymmetricDifference).to.be.a('function')
  })

  it('handles invalid inputs', function(){
    expect(setSymmetricDifference([1, 2])).to.equal('Invalid input')
    expect(setSymmetricDifference(1)).to.equal('Invalid input')
    expect(setSymmetricDifference('a')).to.equal('Invalid input')
    expect(setSymmetricDifference(true)).to.equal('Invalid input')
  })

  it('setSymmetricDifference(a, b) returns the symmetric difference of sets a and b (entries which are not shared by a and b)', function(){
    const a = [1, 2, 3, 4]
    const b = [5, 6, 7, 8]

    expect(setSymmetricDifference(a, b)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('setSymmetricDifference(a, b) returns the symmetric difference of sets a and b', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]

    expect(setSymmetricDifference(a, b)).to.deep.equal([1, 3, 6, 8])
  })

  it('setSymmetricDifference(a, a) returns an empty array', function(){
    const a = [1, 2, 3, 4]

    expect(setSymmetricDifference(a, a)).to.deep.equal([])
  })
})
