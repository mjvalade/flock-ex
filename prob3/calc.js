function Calculator(a,b) {
  this.a = a;
  this.b = b;
}

Calculator.prototype.add = function(){
  console.log(this.a + this.b);
  return(this.a + this.b);
};

Calculator.prototype.subtract = function(){
  console.log(this.a - this.b);
  return(this.a - this.b);
};

Calculator.prototype.multiply = function(){
  console.log(this.a * this.b);
  return(this.a * this.b);
};

Calculator.prototype.divide = function(){
  console.log(this.a / this.b);
  return(this.a / this.b);
};

module.exports = Calculator;

// In terminal run > node calc.js
let calc = new Calculator(6,3);
calc.add();
calc.subtract();
calc.multiply();
calc.divide();
