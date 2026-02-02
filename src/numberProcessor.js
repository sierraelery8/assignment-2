const fs = require('fs');
const path = require('path');

function readNumbers(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');
    return data
        .split('\n')
        .map(line => line.trim())
        .filter(line => line !== '')
        .map(Number);
}

function calculateSum(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function findMax(numbers) {
    return Math.max(...numbers);
}

function findMin(numbers) {
    return Math.min(...numbers);
}

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

if (require.main === module) {
    const sampleFile = path.join(__dirname, '../data/sample-numbers.txt');
    console.log(processNumbers(sampleFile));
}

module.exports = {
    readNumbers,
    calculateSum,
    findMax,
    findMin,
    calculateAverage,
    processNumbers
};
