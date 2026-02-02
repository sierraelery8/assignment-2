const {
  countWords,
  findLongestWord,
  countLines
} = require('../src/textAnalyzer');

describe('Text Analyzer Functions', () => {

  test('counts the total number of words', () => {
    const text = "Hello world this is a test";
    const result = countWords(text);
    expect(result).toBe(6);
  });

  test('finds the longest word', () => {
    const text = "cat hippopotamus dog";
    const result = findLongestWord(text);
    expect(result).toBe("hippopotamus");
  });

  test('counts how many lines the text has', () => {
    const text = "Line one\nLine two\nLine three";
    const result = countLines(text);
    expect(result).toBe(3);
  });

});
