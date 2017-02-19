#### Problem #3

Create a calculator Javascript object that has functions to add/subtract/multiply/divide. It should allow me to do something like this. Please take creative liberties with what the exact API looks like. We care more about you describing the code that it being done a certain way.

Calc = Calculator.new()

Calc.add(2, 2)     // returns 4

Calc.subtract(10, 3) // returns 7
Calc.subtract(10, -3) // returns 13

Calc.multiply(2,10) // returns 20

Calc.divide(20,10) // returns 2
Calc.divide(null,10) // returns null

##### Notes
Using the prototype method for creating a JS object I created a Calculator and then four methods on the initial object. I also included 7 unit tests to check that the functions are working.
