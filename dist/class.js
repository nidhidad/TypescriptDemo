"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _Employee_id, _Employee_empCount;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    constructor(id, name, address) {
        var _b, _c;
        _Employee_id.set(this, void 0); // # keyword is used to make the property private
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
        __classPrivateFieldSet(_b = _a, _a, (_c = __classPrivateFieldGet(_b, _a, "f", _Employee_empCount), _c++, _c), "f", _Employee_empCount);
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
    static getEmployeeCount() {
        return __classPrivateFieldGet(this, _a, "f", _Employee_empCount);
    }
    login() {
        return { name: this.name, email: '', id: __classPrivateFieldGet(this, _Employee_id, "f") };
    }
}
_a = Employee, _Employee_id = new WeakMap();
_Employee_empCount = { value: 0 };
let john = new Employee(1, 'John Doe', { street: '123 Main St', city: 'Anytown', state: 'CA', zip: 12345 });
console.log(john);
john.empId = 100;
console.log(`Update emp id: ${john.empId}`); // 100
console.log(john.getNameWithAddress()); // John Doe stays at 123 Main St
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getManagerDetails() {
        return `Manager: ${this.name} stays at ${this.address}`;
    }
}
let janeAddress = { street: '456 Main St', city: 'Anytown', state: 'CA', zip: 67890 };
let jane = new Manager(2, 'Jane Doe', janeAddress);
console.log(jane);
console.log(jane.getManagerDetails()); // Manager: Jane Doe stays at 456 Main St
console.log(`Current employee count is ${Employee.getEmployeeCount()}`); // 2
//# sourceMappingURL=class.js.map