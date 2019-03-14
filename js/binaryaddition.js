// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

let sum = 0;
function addBinary(a, b){
  sum = a+b
  let binary = sum.toString(2)
}
 addBinary(4, 5) //should return 1001
 addBinary(1, 2) //should return 11
