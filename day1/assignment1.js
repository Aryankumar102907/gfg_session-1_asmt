/*
Question 1: Array Transformation
Write a function called 'transformArray' that takes an array of numbers as input.
The function should:
1. Double all even numbers
2. Triple all odd numbers
3. Return the transformed array
Example: transformArray([1, 2, 3, 4]) should return [3, 4, 9, 8]
*/

function transformArray(arr) {
    // Write your code here
    // Should double even numbers and triple odd numbers
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            arr[i] *= 2;
            // console.log(arr[i]);
        }else {
            arr[i] *= 3;
            // console.log(arr[i]);
        }
    }
    return arr;
}

module.exports = { transformArray };