const add = function(a, b) {
	return Number(a)+Number(b);
};

const subtract = function(a, b) {
	return Number(a)-Number(b);
};

const sum = function(numbers) {
	let computedSum = 0;
  for(const number of numbers) computedSum += Number(number);
  return computedSum;
};

const multiply = function(numbers) {
  let product = 1;
  for(const number of numbers) product *= Number(number);
  return product;
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(number) {
	let product = 1;
  if(number === 0) return 1;
  for(let i = 1; i <= number; i++) product *= i;
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
