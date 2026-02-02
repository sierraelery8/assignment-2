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
    numbers = readNumbers(sampleFile);
  });

  test('readNumbers returns an array of numbers', () => {
    expect(Array.isArray(numbers)).toBe(true);
    numbers.forEach(num => expect(typeof num).toBe('number'));
  });

  test('calculateSum returns correct sum', () => {
    const sum = calculateSum(numbers);
    const expectedSum = numbers.reduce((a, b) => a + b, 0);
    expect(sum).toBe(expectedSum);
  });

  test('findMax returns the highest number', () => {
    const max = findMax(numbers);
    expect(max).toBe(Math.max(...numbers));
  });

  test('findMin returns the lowest number', () => {
    const min = findMin(numbers);
    expect(min).toBe(Math.min(...numbers));
  });

  test('calculateAverage returns the correct average', () => {
    const avg = calculateAverage(numbers);
    const expectedAvg = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    expect(avg).toBe(expectedAvg);
  });

  test('processNumbers returns an object with sum, max, min, average', () => {
    const result = processNumbers(sampleFile);
    expect(result).toHaveProperty('sum');
    expect(result).toHaveProperty('max');
    expect(result).toHaveProperty('min');
    expect(result).toHaveProperty('average');
  });

  // --- Edge case tests ---
  test('functions handle empty array', () => {
    expect(calculateSum([])).toBe(0);
    expect(findMax([])).toBe(-Infinity); // Math.max() on empty array
    expect(findMin([])).toBe(Infinity);  // Math.min() on empty array
    expect(calculateAverage([])).toBe(0);
  });

  test('functions handle single-element array', () => {
    const single = [42];
    expect(calculateSum(single)).toBe(42);
    expect(findMax(single)).toBe(42);
    expect(findMin(single)).toBe(42);
    expect(calculateAverage(single)).toBe(42);
  });

  test('functions handle negative numbers', () => {
    const nums = [-5, -10, -3];
    expect(calculateSum(nums)).toBe(-18);
    expect(findMax(nums)).toBe(-3);
    expect(findMin(nums)).toBe(-10);
    expect(calculateAverage(nums)).toBeCloseTo(-6); // Use toBeCloseTo for decimals
  });
});
