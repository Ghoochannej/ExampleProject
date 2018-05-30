const lib = require('../src/index');

const sum = lib.sum(3, 5);
const subtract = lib.subtract(3, 5);
const multiply = lib.multiply(3, 5);
const divide = lib.divide(3, 0);

console.log(sum);
console.log(subtract);
console.log(multiply);
console.log(divide);
