export {};

let age: number = 29;
let firstname: string = "Furkan";
let lastname: string = "Soylu";
let isUpdated: boolean = false;

function display(id:any , name:string) {
    console.log("Id = " + id + ", Name = " + name )
}

// DATA TYPES : NUMBER - STRING - BOOLEAN

let first: number = 123; // number 
let second: number = 0x37CF;  // hexadecimal
let third: number = 0o377;      // octal
let fourth: number = 0b111001;// binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57 

let employeefirstName: string = "Furkan Soylu";
console.log(employeefirstName);

let employeeName: string = "John Smith";
let employeeDept: string = "Finance";

// Pre-ES6 
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department.";

// Post-ES6 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`;
console.log(employeeDesc1);
console.log(employeeDesc2);

let isPresent: boolean = false;

console.log(isPresent);

// DATA TYPE ARRAY

let firstNames: string[] = ['Can', 'Tuba', 'Merve'];
// let firstNames: Array<string> = ['Can', 'Tuba', 'Merve']; // Other way of defining array
console.log(firstNames);


let arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false];


let ids: Array<number>;
ids = [23, 34, 100, 124, 44];

// let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana',true]; // Multitype defining array
let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];


let fruits: Array<string>;
fruits = ['Apple', 'Orange', 'Banana'];

// console.log(fruits[1]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // output: Apple Orange Banana
}

//TUPLE

let Id: number = 1;
let instructorName: string = 'Furkan';

let instructor: [number, string] = [1, "Furkan"];

var user: [number, string, boolean, number, string];
user = [1, "Steve", true, 20, "Admin"];

console.log(instructor, user);


let employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(employee);

// OBJECT

type Person = {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
};


let instrustor: Person;

instrustor = {
    firstName: 'Furkan',
    lastName: 'Soylu',
    age: 27,
    jobTitle: 'Software Engineer'
}

let personFeat: {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
}



personFeat = {
    firstName: 'Mehmet',
    lastName: 'Hattapoğlu',
    age: 29,
    jobTitle: 'Machanical Engineer'
}

console.log(personFeat);

enum Media {
    Newspaper,
    Newsletter,
    Magazine,
    Book
};

console.log(Media.Newspaper);
console.log(Media[3]);

enum Sports {
    Basketball = 1,
    Futball,
    Tennis,
    Book
};

console.log(Sports.Basketball);
console.log(Sports[3]);


enum PrintMedia {
     Newspaper = "NEWSPAPER",
     Newsletter = "NEWSLETTER",
     Magazine = "MAGAZINE",
     Book = "BOOK"
    }

 console.log(PrintMedia.Newsletter);
 console.log(PrintMedia['Newspaper']);

 // Union Type

 let code: string | number | boolean;

// code = 1232;

code = false;
console.log(code);

// any type 

let someThing: any = "Hello";
someThing = 45;
someThing = true;
someThing = {
    firstName: 'Furkan',
    lastName: 'Soylu',
}
console.log(someThing);

let anyarr: any[] = ["John", 212, true];
console.log(anyarr);

// void type 

function sayHello(): void {
    console.log('Hi');
}

sayHello();

// never type 

// function throwError(errorMsg: string): never {
//     throw new Error(errorMsg);
// }

// throwError("Hata");


// let something: void = null;
// let nothing: never = null;

// TYPE INFERENCE

let sayac = 0;
// let sayac:number = 0;
console.log(typeof (sayac));


// function increment(counter: number){
//     return counter++;
// }

function increment(counter: number): number {
    return counter++;
}

// let a ="some text";
// let b = 123;
// a=b;


function sum(a: number, b: number) {
    return a + b;
}

let total:number = sum(10,15);
console.log(total);

// let total: string = sum(10, 15);

// TYPE ASSERTION

// let code: any = 123;

// let empCode = <number>code;
// console.log(typeof (empCode));

interface Employee {
    name: string,
    code: number
}

let employeeObj = <Employee>{};
console.log(typeof (employeeObj));
employeeObj.name = "Furkan";
console.log(employeeObj);

// If Else - Ternary Operator 

let x: number = 25;
let y: number = 25;


if (x > y) {
     console.log("X is greater than Y");
}
else if (x < y) {
     console.log("X is less than Y");
 }
 else {
     console.log("X equals to Y");
 }

x > y ? console.log("X is greater than Y") : console.log("X is less than Y or equals")

// Switch Case

let day: number = 26;

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("There is no such day");
        break;
}

// For loop 

for (let i = 0; i < 3; i++) {
    console.log("Value of i", i);
}

let NumberArr = [10, 20, 30, 40];

for (let item of NumberArr) {
    console.log(item);
}

// let StringArr = "Furkan Soylu";

// for (let items of StringArr) {
//     console.log(items);
// }


for (let item in NumberArr) {
    console.log(item);
}

// DO WHİLE LOOP

let counter = 10;


while (counter < 5) {
    console.log(counter);
    counter++;

    if (counter == 3) {
        break;
    }
}

do {
    console.log(counter);
    counter++;
} while (counter < 5);

// FUNCTION

function add(a: number, b: number):number {
    return a + b;
}

let summation = add(10, 20);

console.log(typeof (summation));


function print() {
    console.log("Furkan Soylu");
    return 35;
}


let variable = print();
console.log(variable);


function addStr(ad: string, soyad: string): string {
    return ad + ' ' + soyad;
}

let Strvariable = addStr("Furkan", "Soylu");
console.log(Strvariable);



function addDefaultStr(ad: string, soyad: string = "Asoğlu"): string {
    return ad + ' ' + soyad;
}

let defaultStr = addDefaultStr("Furkan", "Soylu");
console.log(defaultStr);

// OPTIONAL PARAMETERS & ARROW FUNCTION

function multiplication(a: number, b: number, c?: number) {
    console.log(typeof (c));
    if (typeof c !== 'undefined') {
        return a * b * c;
    }

    return a * b;
}

// c? is defining optional parameter

let multipVariable = multiplication(5, 10);
console.log(multipVariable);


// function multiplicationFunc(a: number, b: number): number {
//     return a * b;
// }

let multiplicationArrowFunc = (a: number, b: number): number => {
    return a * b;
}
// let carpim = (a: number, b: number): number => a * b; // Single line arrow function definition


let multipVariableArrow = multiplicationArrowFunc(4, 5);
console.log(multipVariableArrow);


let printScreen = () => {

    console.log("Furkan Soylu");
}


// let print = () console.log("Can Boz"); // Single line arrow function definition

printScreen();

// FUNCTION OVERLOADING

function overloadingFunc(a: string, b: string): string;
function overloadingFunc(a: number, b: number): number;
function overloadingFunc(a: number, b: string): any;

function overloadingFunc(a: any, b: any): any {
    return a + b;
}

let overloadingVariable = overloadingFunc(44, ' Furkan');
console.log(overloadingVariable);

// REST PARAMETERS

function sumAny(a: string, ...numbers: number[]): number {
    console.log(a);
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(sumAny("Furkan", 20, 30));


function combine(message: string, ...names: string[]) {
    console.log(message + " " + names.join(", "));
}

combine("Merhaba", "Furkan", "Mehmet", "Ömer")

// CLASS STRUCTURE

class PersonInfo {
    private id: number;
    public firstName: string;
    readonly lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let mypersonalinfo = new PersonInfo(43, 'Furkan', 'Soylu');
console.log(mypersonalinfo);
console.log(mypersonalinfo.getFullName());

//INHERITANCE

// Person is  parent and Employee child class
// Constructor of Parent class was triggered off with super keyword
class Employee extends PersonInfo {
    constructor(id: number,
        firstName: string,
        lastName: string) {
        super(id, firstName, lastName)
    }
}

let employeePersonInfo = new Employee(44, "Serkan", "Çelik");
console.log(employeePersonInfo.getFullName());

// STATIC METHODS - PROPERTIES

class Circle {
    static pi: number = 3.14;
    pi = 3;

    constructor() {
        this.pi++; // pi equals to 3 because Static methods cannot access instances of the class with the this keyword.
        Circle.pi++;
    }

    static calculate(yaricap: number) {
        return this.pi * yaricap * yaricap;
    }
}

let myObject1 = new Circle();
let myObject2 = new Circle(); // Since we created the object twice, the Circle.pi number becomes 5.14 (Circle.pi++)

console.log(myObject1.pi); 
console.log(myObject2.pi);

console.log(Circle.pi);
console.log(Circle.calculate(5));

// ABSTRACT CLASS

abstract class Department {
    constructor(public name: string) { }

    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void;

    // abstract generateReports(): void;
}


// You cannot get a new instance of an abstract class by itself.
// but you can give reference -- let department: Department, department = new AccountingDepartment();
// You must implement abstract methods in abstract class which is the class you extend.


class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }

}

// let department = new AccountingDepartment(); // new instance method
let department: Department
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports();

// INTERFACE 

interface PersonInformation {
    // We define the type of the important values.
    readonly firstName: string,
    lastName: string,
    middleName?: string // optional parameter
}



function getFullName(person: PersonInformation) {

    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }

    return `${person.firstName} ${person.lastName}`;
}

let person : PersonInformation = {
    firstName: 'Ahmad',
    lastName: 'Meşe',
    middleName: 'Mirzat',
// We can also add values ​​that are not in the interface
// age: 26 // Interface of PersonInformation doesn't have age variable
};

// person.firstName = 'Ahmat' // We cannot assign a value because the parameter is defined as readonly.

console.log(getFullName(person));

interface StringFormat {
    (str: string, isUpper: boolean): string
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
}

console.log(format("Furkan Soylu", true));

// INTERFACE EXTEND OPERATIONS AND INTERFACE IMPLEMENTATION

interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee extends IPerson {
    empNumber: number;
}

interface IWorker extends IPerson {
    empDepartment: string;
}

let employeeInf: IEmployee = {
    empNumber: 1,
    gender: 'Male',
    name: 'Can'

}

let employeeDepartment: IWorker = {
    empDepartment: 'Software Department',
    gender: 'Male',
    name: 'Can'

}

console.log(employeeInf);
console.log(employeeDepartment);

interface IPerson {
    name: string;
    gender: string;
}


class IEmployee implements IPerson {
    empNumber: number;
    name: string;
    gender: string;
    constructor(empNumber: number, name: string, gender: string) {
        this.empNumber = empNumber;
        this.name = name;
        this.gender = gender;
    }
}

let Iemployee = new IEmployee(5, "Furkan", "Soylu ");
console.log(Iemployee);

// TYPE INTERSECTION

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    name: string;
    id: number;
}


interface Contact {
    email: string;
    phone: string;
}

type Worker = Identity & Contact;

let workerPersonal: Worker = {
    id: 54,
    name: "Furkan Soylu",
    email: "furkannsl@hotmail.com",
    phone: "+90345435345324"
}

console.log(workerPersonal);

type Customer = BusinessPartner & Contact;

let customer: Customer = {
    credit: 2121,
    email: "azmits@hotmail.com",
    name: "Azmi asoğlu",
    phone: "+903423423324"
}

console.log(customer);

// TYPE GUARD

type character = string | number;

function addCharacter(a: character, b: character) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Please send data in the correct format');
}

// console.log(addCharacter(5, "Furkan")); // We get a error 
console.log(addCharacter('Soylu', 'Furkan'));


class CustomerInf {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPartnerInf = CustomerInf | Supplier;

function signContract(partner: BusinessPartnerInf): string {
    let message: string;
    if (partner instanceof CustomerInf) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }

    else {
        message = 'Unknown partner type';
    }

    return message;
}


 // GENERICS

 function getRandomNumber(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 54, 65, 7, 8];

console.log(getRandomNumber(numbers));

function getRandomString(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let names = ["Doğan", "Arif", "Furkan"];
console.log(getRandomString(names));


// function getRandomElement(items: any[]): any {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// }


let degiskenlerim = [true, false, true];
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElement<number>(numbers));
console.log(getRandomElement<string>(names));
console.log(getRandomElement(degiskenlerim));

// GENERICS CONSTRAINTS

function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    }
}

let personal = merge(
    { name: "Furkan" },
    { age: 27 }
    // 29 error
)

console.log(personal);

// GENERICS USAGE IN INTERFACE

interface Months<U, V> {
    key: U,
    value: V
}

let month: Months<number, string> = {
    key: 1,
    value: 'January'
}

console.log(month);

interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

class List<T> implements Collection<T>{
    private items: T[] = [];
    add(o: T): void {
        this.items.push(o);
        console.log(this.items);
    }


    remove(o: T): void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}

let list = new List<number>();

for (let i = 0; i < 7; i++) {
    list.add(i);
}

// GENERICS USAGE IN CLASS

class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop()!;
    }
}

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

let StackFuncnumbers = new Stack<number>(5);

while (!StackFuncnumbers.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`)
    StackFuncnumbers.push(n);
}
while (!StackFuncnumbers.isEmpty()) {
    let n = StackFuncnumbers.pop();
    console.log(`Pop ${n} from the stack.`);
}
