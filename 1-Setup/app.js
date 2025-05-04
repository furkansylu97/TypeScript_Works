var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//TUPLE
var Id = 1;
var instructorName = 'Furkan';
var instructor = [1, "Furkan"];
var user;
user = [1, "Steve", true, 20, "Admin"];
console.log(instructor, user);
var employee;
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(employee);
var instrustor;
instrustor = {
    firstName: 'Furkan',
    lastName: 'Soylu',
    age: 27,
    jobTitle: 'Software Engineer'
};
var personFeat;
personFeat = {
    firstName: 'Mehmet',
    lastName: 'Hattapoğlu',
    age: 29,
    jobTitle: 'Machanical Engineer'
};
console.log(personFeat);
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 0] = "Newspaper";
    Media[Media["Newsletter"] = 1] = "Newsletter";
    Media[Media["Magazine"] = 2] = "Magazine";
    Media[Media["Book"] = 3] = "Book";
})(Media || (Media = {}));
;
console.log(Media.Newspaper);
console.log(Media[3]);
var Sports;
(function (Sports) {
    Sports[Sports["Basketball"] = 1] = "Basketball";
    Sports[Sports["Futball"] = 2] = "Futball";
    Sports[Sports["Tennis"] = 3] = "Tennis";
    Sports[Sports["Book"] = 4] = "Book";
})(Sports || (Sports = {}));
;
console.log(Sports.Basketball);
console.log(Sports[3]);
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWSPAPER";
    PrintMedia["Newsletter"] = "NEWSLETTER";
    PrintMedia["Magazine"] = "MAGAZINE";
    PrintMedia["Book"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia.Newsletter);
console.log(PrintMedia['Newspaper']);
// Union Type
var code;
// code = 1232;
code = false;
console.log(code);
// any type 
var someThing = "Hello";
someThing = 45;
someThing = true;
someThing = {
    firstName: 'Furkan',
    lastName: 'Soylu',
};
console.log(someThing);
var anyarr = ["John", 212, true];
console.log(anyarr);
// void type 
function sayHello() {
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
var sayac = 0;
// let sayac:number = 0;
console.log(typeof (sayac));
// function increment(counter: number){
//     return counter++;
// }
function increment(counter) {
    return counter++;
}
// let a ="some text";
// let b = 123;
// a=b;
function sum(a, b) {
    return a + b;
}
var total = sum(10, 15);
console.log(total);
var employeeObj = {};
console.log(typeof (employeeObj));
employeeObj.name = "Furkan";
console.log(employeeObj);
// If Else - Ternary Operator 
var x = 25;
var y = 25;
if (x > y) {
    console.log("X is greater than Y");
}
else if (x < y) {
    console.log("X is less than Y");
}
else {
    console.log("X equals to Y");
}
x > y ? console.log("X is greater than Y") : console.log("X is less than Y or equals");
// Switch Case
var day = 26;
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
for (var i = 0; i < 3; i++) {
    console.log("Value of i", i);
}
var NumberArr = [10, 20, 30, 40];
for (var _i = 0, NumberArr_1 = NumberArr; _i < NumberArr_1.length; _i++) {
    var item = NumberArr_1[_i];
    console.log(item);
}
// let StringArr = "Furkan Soylu";
// for (let items of StringArr) {
//     console.log(items);
// }
for (var item in NumberArr) {
    console.log(item);
}
// DO WHİLE LOOP
var counter = 10;
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
function add(a, b) {
    return a + b;
}
var summation = add(10, 20);
console.log(typeof (summation));
function print() {
    console.log("Furkan Soylu");
    return 35;
}
var variable = print();
console.log(variable);
function addStr(ad, soyad) {
    return ad + ' ' + soyad;
}
var Strvariable = addStr("Furkan", "Soylu");
console.log(Strvariable);
function addDefaultStr(ad, soyad) {
    if (soyad === void 0) { soyad = "Asoğlu"; }
    return ad + ' ' + soyad;
}
var defaultStr = addDefaultStr("Furkan", "Soylu");
console.log(defaultStr);
// OPTIONAL PARAMETERS & ARROW FUNCTION
function multiplication(a, b, c) {
    console.log(typeof (c));
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
// c? is defining optional parameter
var multipVariable = multiplication(5, 10);
console.log(multipVariable);
// function multiplicationFunc(a: number, b: number): number {
//     return a * b;
// }
var multiplicationArrowFunc = function (a, b) {
    return a * b;
};
// let carpim = (a: number, b: number): number => a * b; // Single line arrow function definition
var multipVariableArrow = multiplicationArrowFunc(4, 5);
console.log(multipVariableArrow);
var printScreen = function () {
    console.log("Furkan Soylu");
};
// let print = () console.log("Can Boz"); // Single line arrow function definition
printScreen();
function overloadingFunc(a, b) {
    return a + b;
}
var overloadingVariable = overloadingFunc(44, ' Furkan');
console.log(overloadingVariable);
// REST PARAMETERS
function sumAny(a) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    console.log(a);
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log(sumAny("Furkan", 20, 30));
function combine(message) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(message + " " + names.join(", "));
}
combine("Merhaba", "Furkan", "Mehmet", "Ömer");
// CLASS STRUCTURE
var PersonInfo = /** @class */ (function () {
    function PersonInfo(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonInfo.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return PersonInfo;
}());
var mypersonalinfo = new PersonInfo(43, 'Furkan', 'Soylu');
console.log(mypersonalinfo);
console.log(mypersonalinfo.getFullName());
//INHERITANCE
// Person is  parent and Employee child class
// Constructor of Parent class was triggered off with super keyword
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, lastName) {
        return _super.call(this, id, firstName, lastName) || this;
    }
    return Employee;
}(PersonInfo));
var employeePersonInfo = new Employee(44, "Serkan", "Çelik");
console.log(employeePersonInfo.getFullName());
// STATIC METHODS - PROPERTIES
var Circle = /** @class */ (function () {
    function Circle() {
        this.pi = 3;
        this.pi++; // pi equals to 3 because Static methods cannot access instances of the class with the this keyword.
        Circle.pi++;
    }
    Circle.calculate = function (yaricap) {
        return this.pi * yaricap * yaricap;
    };
    Circle.pi = 3.14;
    return Circle;
}());
var myObject1 = new Circle();
var myObject2 = new Circle(); // Since we created the object twice, the Circle.pi number becomes 5.14 (Circle.pi++)
console.log(myObject1.pi);
console.log(myObject2.pi);
console.log(Circle.pi);
console.log(Circle.calculate(5));
// ABSTRACT CLASS
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
// You cannot get a new instance of an abstract class by itself.
// but you can give reference -- let department: Department, department = new AccountingDepartment();
// You must implement abstract methods in abstract class which is the class you extend.
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
// let department = new AccountingDepartment(); // new instance method
var department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
function getFullName(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: 'Ahmad',
    lastName: 'Meşe',
    middleName: 'Mirzat',
    // We can also add values ​​that are not in the interface
    // age: 26 // Interface of PersonInformation doesn't have age variable
};
// person.firstName = 'Ahmat' // We cannot assign a value because the parameter is defined as readonly.
console.log(getFullName(person));
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format("Furkan Soylu", true));
var employeeInf = {
    empNumber: 1,
    gender: 'Male',
    name: 'Can'
};
var employeeDepartment = {
    empDepartment: 'Software Department',
    gender: 'Male',
    name: 'Can'
};
console.log(employeeInf);
console.log(employeeDepartment);
var IEmployee = /** @class */ (function () {
    function IEmployee(empNumber, name, gender) {
        this.empNumber = empNumber;
        this.name = name;
        this.gender = gender;
    }
    return IEmployee;
}());
var Iemployee = new IEmployee(5, "Furkan", "Soylu ");
console.log(Iemployee);
var workerPersonal = {
    id: 54,
    name: "Furkan Soylu",
    email: "furkannsl@hotmail.com",
    phone: "+90345435345324"
};
console.log(workerPersonal);
var customer = {
    credit: 2121,
    email: "azmits@hotmail.com",
    name: "Azmi asoğlu",
    phone: "+903423423324"
};
console.log(customer);
function addCharacter(a, b) {
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
var CustomerInf = /** @class */ (function () {
    function CustomerInf() {
    }
    CustomerInf.prototype.isCreditAllowed = function () {
        // ...
        return true;
    };
    return CustomerInf;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        // ...
        return true;
    };
    return Supplier;
}());
function signContract(partner) {
    var message;
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
// GENERICs
function getRandomNumber(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 54, 65, 7, 8];
console.log(getRandomNumber(numbers));
function getRandomString(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var names = ["Doğan", "Arif", "Furkan"];
console.log(getRandomString(names));
// function getRandomElement(items: any[]): any {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// }
var degiskenlerim = [true, false, true];
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElement(numbers));
console.log(getRandomElement(names));
console.log(getRandomElement(degiskenlerim));
