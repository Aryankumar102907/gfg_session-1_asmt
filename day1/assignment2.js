/*
Question 2: String Calculator
Write a function called 'calculateString' that takes a string of numbers separated by spaces.
The function should:
1. Split the string into numbers
2. Remove any numbers greater than 100
3. Return the sum of remaining numbers
Example: calculateString("5 20 150 10") should return 35
*/

function calculateString(str) {
    // Split the string into an array of substrings
    let sum = 0;
    const numArr = str.split(" ");
    for (let i = 0; i < numArr.length; i++) {
        let num = parseInt(numArr[i]);
        console.log(num);
        if(num <= 100){
            sum += num;
        }
    }
    return sum;
}

module.exports = { calculateString };

// const str = "Hello";
// const charArray = str.split(""); // charArray will be ['H', 'e', 'l', 'l', 'o']