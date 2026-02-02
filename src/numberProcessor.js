const path = require('path');

const {
  readNumbers,
  calculateSum,
  findMax,
  findMin,
  calculateAverage,
  processNumbers
} = require('../src/numberProcessor');

const sampleFile = path.join(__dirname, '../data/sample-numbers.txt');

describe('numberProcessor functions', () => {
  let numbers;

  beforeAll(() => {
    // reads the numbers from the sample file to be used in tests
    numbers = readNumbers(sampleFile);
  });

  test('readNumbers returns an array of numbers', () => {
    expect(Array.isArray(numbers)).toBe(true); // should return an array
    numbers.forEach(num => expect(typeof num).toBe('number')); // all elements should be numbers
  });

  // a test for that calculateSum can return the correct sum
  test('calculateSum returns correct sum', () => {
    const sum = calculateSum(numbers);
    const expectedSum = numbers.reduce((a, b) => a + b, 0); // manual sum for comparison
    expect(sum).toBe(expectedSum);
  });

  // findMax returns the highest number
  test('findMax returns the highest number', () => {
    const max = findMax(numbers);
    expect(max).toBe(Math.max(...numbers)); // compare with Math.max
  });

  // findMin returns the lowest number
  test('findMin returns the lowest number', () => {
    const min = findMin(numbers);
    expect(min).toBe(Math.min(...numbers)); // compare with Math.min
  });

  // calculateAverage returns the correct avg
  test('calculateAverage returns the average', () => {
    const avg = calculateAverage(numbers);
    const expectedAvg = numbers.reduce((a, b) => a + b, 0) / numbers.length; // manual calculation
    expect(avg).toBe(expectedAvg);
  });

  // processNumbers returns an object with all keys
  test('processNumbers returns an object with sum, max, min, average', () => {
    const result = processNumbers(sampleFile);
    expect(result).toHaveProperty('sum');
    expect(result).toHaveProperty('max');
    expect(result).toHaveProperty('min');
    expect(result).toHaveProperty('average');
  });
});
