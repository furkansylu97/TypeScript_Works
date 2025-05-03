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