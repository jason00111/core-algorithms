import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome2'

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('returns true if the input is a palendrome', function(){
    expect(isPalindrome('radar')).to.be.true
  })

  it('returns false if the input is not a palendrome', function(){
    expect(isPalindrome('bananas')).to.be.false
  })

  it('ignores punctuation, spacing, and case', function(){
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.be.true
  })
})
