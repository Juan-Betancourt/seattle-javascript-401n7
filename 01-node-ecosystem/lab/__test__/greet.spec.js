'use strict';

const hello = require('../lib/greet.js');


describe('Greet Module', () => {
  it('Write a test that should return null if the value is not a string', () => {
    let greetPerson = hello.greet(1);
    expect(greetPerson).toBe(null);
  });

  it('Write a test that expects hello world', () => {
    let greetPerson = hello.greet('world');
    console.log(greetPerson);
    expect(greetPerson).toEqual('Hello, world');
  });

});