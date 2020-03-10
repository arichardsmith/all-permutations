import 'mocha'
import { assert } from 'chai'

import all from '../src/generator'

describe('all-variations-generator', () => {
  it('produces the correct amount of variations', () => {
    const fixtureOne = ['foo', 'bar']
    const resOne = Array.from(all`test${fixtureOne}`)

    assert.lengthOf(resOne, fixtureOne.length)

    const fixtureTwo = ['foo', 'bar', 'baz']
    const resTwo = Array.from(all`${fixtureOne}${fixtureTwo}`)

    assert.lengthOf(resTwo, fixtureOne.length * fixtureTwo.length)
  })

  it('interpolates the string correctly', () => {
    const foo = ['foo', 'bar']
    const num = [1, 2]

    const res = Array.from(all`${num}${foo}`)

    assert.isTrue(
      res.indexOf('1foo') !== -1 && res.indexOf('2bar') !== -1,
      `First result "${res[0]}"`
    )
  })

  it('handles non-array arguements', () => {
    const iter = all`foo${'bar'}`
    assert.equal(iter.next().value, 'foobar')
  })

  it('handles strings with no interpolation', () => {
    const iter = all`foobar`
    assert.equal(iter.next().value, 'foobar')
  })
})
