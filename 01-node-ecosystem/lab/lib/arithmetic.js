'use strict'

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
