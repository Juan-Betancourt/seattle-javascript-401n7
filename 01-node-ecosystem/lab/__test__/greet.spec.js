'use strict';

const hello = require('../lib/greet.js');

const faker = require('faker');

describe('Greet Module', () => {
  it('Write a test that should return null if the value is not a string', () => {
    let greetPerson = hello.greet(1);
    expect(greetPerson).toBe(null);
  });








});