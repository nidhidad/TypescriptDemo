"use strict";
let lname;
lname = "John cena";
let uLName = lname.toUpperCase();
console.log(uLName); // JOHN
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
let numList = Array();
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
console.log(results); // [3,4,5]
let num = results.find((num) => num == 2);
console.log(num); // 2
let sum = numList.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
let swapNums;
function swapNumbers(firstNumber, secondNumber) {
    return [secondNumber, firstNumber];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums[0]); // [20, 10]
console.log(swapNums[1]); // [20, 10]
//# sourceMappingURL=datatypes.js.map