import { ILogin, IUser } from './interface';

interface IAddress {
        street: string;
        city: string;
        state: string;
        zip: number;
}


class Employee implements ILogin {
    #id: number;  // # keyword is used to make the property private
    name: string;
    address: IAddress;

    static #empCount: number = 0;

    get empId() : number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    constructor(id: number, name: string, address: IAddress){
        this.#id = id;
        this.name = name;
        this.address = address;

        Employee.#empCount++;
    }

    getNameWithAddress() : string {
        return `${this.name} stays at ${this.address}`;
    }

    static getEmployeeCount() {
        return this.#empCount;
    }

    login(): IUser {
        return { name: this.name, email: '', id: this.#id };
    }
}

let john = new Employee(1, 'John Doe', 
    { street: '123 Main St', city: 'Anytown', state: 'CA', zip: 12345 });

console.log(john);

john.empId = 100;
console.log(`Update emp id: ${john.empId}`); // 100

console.log(john.getNameWithAddress()); // John Doe stays at 123 Main St

class Manager extends Employee {
    constructor(id: number, name: string, address: IAddress) {
        super(id, name, address);
    }

    getManagerDetails() {
        return `Manager: ${this.name} stays at ${this.address}`;
    }
}

let janeAddress: IAddress = { street: '456 Main St', city: 'Anytown', state: 'CA', zip: 67890 };
let jane = new Manager(2, 'Jane Doe', janeAddress);

console.log(jane);
console.log(jane.getManagerDetails()); // Manager: Jane Doe stays at 456 Main St

console.log(`Current employee count is ${Employee.getEmployeeCount()}`); // 2
