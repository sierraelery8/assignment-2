const fs = require('fs');

// count of total number of words
function countWords(text) {
  const words = text.trim().split(/\s+/);
  return words.length;
}

// function to find and return the longest word
function findLongestWord(text) {
  const words = text.trim().split(/\s+/);
  let longestWord = "";

  for (let word of words) {
    word = word.replace(/[^\w]/g, '');
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// count of how many lines
function countLines(text) {
  const lines = text.split('\n');
  return lines.length;
}

// function that reads the file and analyzes its contents
function analyzeText(filePath) {
  const text = fs.readFileSync(filePath, 'utf-8');

  return {
    totalWords: countWords(text),
    longestWord: findLongestWord(text),
    totalLines: countLines(text)
  };
}

// verifying that this work

// testing with quotes.txt
console.log("Quotes.txt Analysis:");
const quotesResult = analyzeText('data/quotes.txt');
console.log(quotesResult);

// testing with sample-text.txt
console.log("\nSample-text.txt Analysis:");
const sampleResult = analyzeText('data/sample-text.txt');
console.log(sampleResult);


// export functions
module.exports = {
  countWords,
  findLongestWord,
  countLines,
  analyzeText
};

