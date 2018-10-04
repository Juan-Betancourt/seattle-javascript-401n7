'use strict';

module.exports = exports = {};

exports.myModuleName ='Greet Module';

exports.greet = (greeting) => {
  return kindness(greeting);
};

const kindness = (greeting) => {
  return `Hello, ${greeting}`;
};

