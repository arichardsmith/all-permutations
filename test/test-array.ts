import 'mocha'
import { assert } from 'chai'

import all from '../src/'

describe('all-variations', () => {
  it('produces the correct amount of variations', () => {
    const fixtureOne = ['foo', 'bar']
    const resOne = all`test${fixtureOne}`

    assert.lengthOf(resOne, fixtureOne.length)

    const fixtureTwo = ['foo', 'bar', 'baz']
    const resTwo = all`${fixtureOne}${fixtureTwo}`

    assert.lengthOf(resTwo, fixtureOne.length * fixtureTwo.length)
  })

  it('interpolates the string correctly', () => {
    const foo = ['foo', 'bar']
    const num = [1, 2]

    const res = all`${num}${foo}`

    assert.isTrue(
      res.indexOf('1foo') !== -1 && res.indexOf('2bar') !== -1,
      `First result "${res[0]}"`
    )
  })

  it('handles non-array arguements', () => {
    assert.deepEqual(all`foo${'bar'}`, ['foobar'])
  })

  it('handles strings with no interpolation', () => {
    assert.deepEqual(all`foobar`, ['foobar'])
  })
})
