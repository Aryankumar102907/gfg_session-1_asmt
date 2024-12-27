/*
Question 3: Object Manipulator
Write a function called 'modifyObject' that takes an object with number values.
The function should:
1. Add 5 to values less than 10
2. Subtract 10 from values greater than or equal to 10
3. Return the modified object
Example: modifyObject({a: 5, b: 15, c: 8}) should return {a: 10, b: 5, c: 13}
*/

function modifyObject(obj) {
    //Write your code here.
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (obj[prop] < 10) {
                obj[prop] += 5;
            }
            else{
                obj[prop] -= 10;
            }
        }
    }
    return obj;
}

module.exports = { modifyObject };
