/*
Question 6: Word Analyzer
Write a function called 'analyzeWord' that takes a string.
The function should return an object containing:
1. length: word length
2. vowels: number of vowels
3. consonants: number of consonants
4. isLong: boolean true if length > 6
Example: analyzeWord("hello") should return {length: 5, vowels: 2, consonants: 3, isLong: false}
*/

function analyzeWord(word) {
    //Write your code here

    //Compact way referred: https://www.geeksforgeeks.org/how-to-get-a-number-of-vowels-in-a-string-in-javascript/
    const cVowels = (word) => {
        const matches = word.match(/[aeiou]/gi);
        return matches ? matches.length : 0;
    };

    let analysis = {
        length: word.length,
        vowels: cVowels(word),
        consonants: word.length - cVowels(word),
        isLong: Boolean(word.length > 6)
    };
    return analysis;
}

module.exports = { analyzeWord };
