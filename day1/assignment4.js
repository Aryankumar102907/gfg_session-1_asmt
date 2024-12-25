/*
Question 4: Pattern Generator
Write a function called 'createPattern' that takes a number n.
The function should:
1. Create a pattern of asterisks where each line has one more asterisk than the previous
2. Return the pattern as a string with newlines
Example: createPattern(3) should return 

*
* *
* * *

*/

function createPattern(n) {
    //Write your code here.
    let rows = n;
    // let cols = n;
    // let matrix = Array(rows).fill().map(() => Array(cols).fill(""));
    let pattern = "";
    for(let i = 1; i <= rows; i++) {
        let j;                       // to match expected pattern: '*\n**\n***'
        for(j = 1; j <= i; j++) {
            pattern += "*";
        }
        if(j <= rows) {
            pattern += "\n";
        }
        // console.log(pattern);
    }
    return pattern;
}

module.exports = { createPattern };
