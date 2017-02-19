/* globals describe, it */

let assert = require('chai').assert;
let Calculator = require('../calc');

describe('Calc', function () {

  it('should be a function', function () {
    assert.isFunction(Calculator);
  });

  it('should instantiate a new Calculator', function () {
    let calc = new Calculator();
    assert.isObject(calc);
  });

});
