const fs = require('fs');

// function that reads numbers from a file & returns them as an array
function readNumbers(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');

  return data
    .split('\n')
    .map(line => Number(line.trim()))
    .filter(num => !isNaN(num));
}

// calculates sum of all numbers
function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// function to find the highest number
function findMax(numbers) {
  return Math.max(...numbers);
}

// function to find the lowest number
function findMin(numbers) {
  return Math.min(...numbers);
}

// calculates avg of numbers
function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  return calculateSum(numbers) / numbers.length;
}

function processNumbers(filePath) {
  const numbers = readNumbers(filePath);

  return {
    sum: calculateSum(numbers),
    max: findMax(numbers),
    min: findMin(numbers),
    average: calculateAverage(numbers)
  };
}

// verifying these functions work

console.log("Sample Numbers Analysis:");
const result = processNumbers('data/sample-numbers.txt');
console.log(result);

// exporting function

module.exports = {
  readNumbers,
  calculateSum,
  findMax,
  findMin,
  calculateAverage,
  processNumbers
};
