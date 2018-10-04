'use strict';

const math = require('../lib/arithmetic.js');

const faker = require('faker');

let numA = faker.fake("{{random.number}}");
let numB = faker.fake("{{random.number}}");
let sumAB = numA + numB;
console.log(sumAB);

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

  it('Run a test that output random numbers', () => {
    let numA = faker.fake("{{random.number}}");
    let numB = faker.fake("{{random.number}}");
    let addFunction = math.addFunction(numA, numB)
    expect(addFunction).toEqual(numA+numB)
  })

});


