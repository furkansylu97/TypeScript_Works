var age = 29;
var firstname = "Furkan";
var lastname = "Soylu";
var isUpdated = false;
function display(id, name) {
    console.log("Id = " + id + ", Name = " + name);
}
// DATA TYPES : NUMBER - STRING - BOOLEAN
var first = 123; // number 
var second = 0x37CF; // hexadecimal
var third = 255; // octal
var fourth = 57; // binary  
console.log(first); // 123 
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57 
var employeefirstName = "Furkan Soylu";
console.log(employeefirstName);
var employeeName = "John Smith";
var employeeDept = "Finance";
// Pre-ES6 
var employeeDesc1 = employeeName + " works in the " + employeeDept + " department.";
// Post-ES6 
var employeeDesc2 = "".concat(employeeName, " works in the ").concat(employeeDept, " department.");
console.log(employeeDesc1);
console.log(employeeDesc2);
var isPresent = false;
console.log(isPresent);
// DATA TYPE ARRAY
var firstNames = ['Can', 'Tuba', 'Merve'];
// let firstNames: Array<string> = ['Can', 'Tuba', 'Merve']; // Other way of defining array
console.log(firstNames);
var arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false];
var ids;
ids = [23, 34, 100, 124, 44];
// let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana',true]; // Multitype defining array
var values = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
var fruits;
fruits = ['Apple', 'Orange', 'Banana'];
// console.log(fruits[1]);
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // output: Apple Orange Banana
}
