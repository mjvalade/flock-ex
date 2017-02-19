function Calculator(a,b) {
  this.a = a;
  this.b = b;
}

Calculator.prototype.add = function(){
  let sum = (this.a + this.b);
  console.log('add/sum:', sum);
};

Calculator.prototype.subtract = function(){
  let sum = (this.a - this.b);
  console.log('subtract/sum:', sum);
};

Calculator.prototype.multiply = function(){
  let sum = (this.a * this.b);
  console.log('multiply/sum:', sum);
};

Calculator.prototype.divide = function(){
  let sum = (this.a / this.b);
  console.log('divide/sum:', sum);
};

module.exports = Calculator;

// In terminal run > node prob3/calc.js
let calc = new Calculator(6,3);
calc.add();
calc.subtract();
calc.multiply();
calc.divide();
