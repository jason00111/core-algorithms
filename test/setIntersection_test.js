import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection()', function(){

  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })

  it('handles invalid inputs', function(){
    expect(setIntersection([1, 2])).to.equal('Invalid input')
    expect(setIntersection(1)).to.equal('Invalid input')
    expect(setIntersection('a')).to.equal('Invalid input')
    expect(setIntersection(true)).to.equal('Invalid input')
  })

  it('setIntersection(a, b) returns an empty array if sets a and b have no entries in common', function(){
    const a = [1, 2, 3, 4]
    const b = [5, 6, 7, 8]

    expect(setIntersection(a, b)).to.deep.equal([])
  })

  it('there are no duplicates in the result', function(){
    const a = [1, 1, 1, 2]
    const b = [1, 2, 3]

    expect(setIntersection(a, b)).to.deep.equal([1, 2])
  })

  it('setIntersection(a, b) returns the entries shared by sets a and b', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]

    expect(setIntersection(a, b)).to.deep.equal([2, 4])
  })
})
