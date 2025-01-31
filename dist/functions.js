"use strict";
function add(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(add(10, 20)); // 30
console.log(add(10, 20, 30)); // 60
const sub = (a, b) => a - b;
console.log(sub(20, 10)); // 10
const mul = function (num1, num2) {
    return num1 * num2;
};
console.log(mul(10, 20)); // 200
function add2(num1, num2, ...nums) {
    let sum = num1 + num2;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}
console.log(add2(10, 20, 30, 40, 50)); // 30
//# sourceMappingURL=functions.js.map