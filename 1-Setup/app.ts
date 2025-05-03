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