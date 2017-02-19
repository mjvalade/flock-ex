/* globals describe, it */

let assert = require('chai').assert;
let Calculator = require('../calc');

describe('Calc', function () {

  it('should be a function', () => {
    assert.isFunction(Calculator);
  });

  it('should instantiate a new Calculator', () => {
    let calc = new Calculator();
    assert.isObject(calc);
  });

  it('should take in two numbers to compute', () => {
    let calc = new Calculator(6,2);
    assert.equal(calc.a, 6);
    assert.equal(calc.b, 2);
  });

  it('should add both numbers passed in', () => {
    let calc = new Calculator(6,2);
    assert.equal(calc.add(6,2), 8);
  });

  it('should subtract both numbers passed in', () => {
    let calc = new Calculator(6,2);
    assert.equal(calc.subtract(6,2), 4);
  });

  it('should multiply both numbers passed in', () => {
    let calc = new Calculator(6,2);
    assert.equal(calc.multiply(6,2), 12);
  });

  it('should divide both numbers passed in', () => {
    let calc = new Calculator(6,2);
    assert.equal(calc.divide(6,2), 3);
  });

});

// Test command: npm test test/calc-test.js
