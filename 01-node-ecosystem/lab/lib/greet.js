'use strict';

module.exports = exports = {};

exports.myModuleName ='Greet Module';

exports.greet = (greeting) => {
  if (typeof greeting !== 'string') {
return null;
  };
  return kindness(greeting);
};

const kindness = (greeting) => {
  return `Hello, ${greeting}`;
};

