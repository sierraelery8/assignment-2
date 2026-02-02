const fs = require('fs');

// counting the total number of words
function countWords(text) {
  // trim removes extra spaces at the beginning and end
  // split separates words by any whitespace
  const words = text.trim().split(/\s+/);
  return words.length;
}

// function finds and returns the longest word
function findLongestWord(text) {
  const words = text.trim().split(/\s+/);
  let longestWord = "";

  for (let word of words) {
    // removal of punctuation from each word
    word = word.replace(/[^\w]/g, '');

    // comparing word lengths to find the longest one
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// counting how many lines are in text
function countLines(text) {

  const lines = text.split('\n');
  return lines.length;
}

function analyzeText(filePath) {
  const text = fs.readFileSync(filePath, 'utf-8');

  // returning results from each function
  return {
    totalWords: countWords(text),
    longestWord: findLongestWord(text),
    totalLines: countLines(text)
  };
}

const result = analyzeText('sample.txt');

// display of results in the console
console.log("Total Words:", result.totalWords);
console.log("Longest Word:", result.longestWord);
console.log("Total Lines:", result.totalLines);

