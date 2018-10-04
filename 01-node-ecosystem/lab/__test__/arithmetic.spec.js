'use strict'

const math = require('../lib/arithmetic.js')

describe('Math Module', () => {

  it('Write a test that return null if not a number', () => {
    let addFunction = math.addFunction(1, NaN)
    expect(addFunction).toEqual(null)
  })

  it('Write a test that return null if not a number', () => {
    let addFunction = math.addFunction(NaN, 1)
    expect(addFunction).toBeNull()
  })

  it('Write a test that return undefined for both numbers', () => {
    let addFunction = math.addFunction(undefined, 11)
    expect(addFunction).toBeNull()
  })

  it('Write a test that return undefined for both numbers', () => {
    let addFunction = math.addFunction(12, undefined)
    expect(addFunction).toBeNull()
  })

  it('Run a test that adds to numeric values', () => {
    let addFunction = math.addFunction(11, 12)
    expect(addFunction).toEqual(23)
  })
});
