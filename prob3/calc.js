// function Animal() { }
//
// Animal.prototype.speak = function(){
//   return this;
// }
//
// Animal.eat = function() {
//   return this;
// }
//
// let obj = new Animal();
// let speak = obj.speak;
// speak(); // global object
//
// let eat = Animal.eat;
// eat(); // global object

function Calculator(a, b) {
  this.a = a;
  this.b = b;
}

Calculator.prototype.add = function(){
  return this.a + this.b;
};

Calculator.prototype.sub = function(){
  return this.a - this.b;
};

Calculator.prototype.mult = function(){
  return this.a * this.b;
};

Calculator.prototype.div = function(){
  return this.a / this.b;
};
