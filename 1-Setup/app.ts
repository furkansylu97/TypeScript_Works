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
