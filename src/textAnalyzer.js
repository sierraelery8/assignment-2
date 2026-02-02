const fs = require('fs');

// function to read the file
function analyzeText(filePath) {
  const text = fs.readFileSync(filePath, 'utf-8');

  // splitting into lines
  const lines = text.split('\n');

  // splitting into words
  const words = text.trim().split(/\s+/);

  // finding the longest word
  let longestWord = "";

  for (let word of words) {
      word = word.replace(/[^\w]/g, '');

      if (word.length > longestWord.length) {
          longestWord = word;
      }
  }

 return {
        totalWords: words.length,
        longestWord: longestWord,
        totalLines: lines.length
 };

}

const result = analyzeText('sample.txt');

console.log("Total Words:", result.totalWords);
console.log("Longest Word:", result.longestWord);
console.log("Total Lines:", result.totalLines);
