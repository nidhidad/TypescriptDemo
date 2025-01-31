"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: 'John Doe', email: '', id: 1 };
console.log(user); // { name: 'John Doe', email: '', id: 1 }
// this is known as object destructuring
let { name: userName, email: userLogin } = { name: 'John Doe', email: '', id: 1, age: 30 };
console.log(userName); // John Doe
console.log(userLogin); // ''
let employee = { name: 'John Doe', email: '', id: 1, salary: 1000 };
console.log(employee); // { name: 'John Doe', email: '', id: 1, salary: 1000 }
// this is known as array descructuring
let [user1, user2, ...restUsers] = [
    { name: 'John Doe', email: '', id: 1 },
    { name: 'Jane Doe', email: '', id: 2 },
    { name: 'Jim Doe', email: '', id: 3 },
    { name: 'Jill Doe', email: '', id: 4 }
];
console.log(user1); // { name: 'John Doe', email: '', id: 1 }
console.log(user2); // { name: 'Jane Doe', email: '', id: 2 }
console.log(restUsers); // [ { name: 'Jim Doe', email: '', id: 3 }, { name: 'Jill Doe', email: '', id: 4 } ]
let result = restUsers.filter(user => user.id > 3);
console.log(result); // [ { name: 'Jill Doe', email: '', id: 4 } ]
// on compilation, the interface is removed from the code
// and the compiled code will be:
// let user = { name: 'John Doe', email: '', id: 1 };
// while with classes the type information is retained
// and the compiled code will be:
// let user = { name: 'John Doe', email: '', id: 1 };
// so use classes when you need to retain the type information such as when getting the result from apis etc.
// and use interfaces when you need to define the shape of the object and not retain the type information
//# sourceMappingURL=interface.js.map