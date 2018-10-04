'use strict';

const faker = require('faker');

let c = faker.fake('{{random.number}}')
console.log(c);

module.exports = {
  addFunction: (a, b) => {
    if (a === undefined || b === undefined) {
      return null;
    }
    if (isNaN(a) || isNaN(b)) {
      return null;
    }
    return a + b;
  }

};
