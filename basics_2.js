TOPICS:
//1. Type coercion
//2. typeof
//3. js reference type or value type?
//4. use of isNaN,NaN,undefined

let a = 2;
//Implicit type coercion in javascript is automatic conversion of value from one data type to another.
// JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time 
// in contrast to statically typed language,
//  where the type of a variable is checked during compile-time.
console.log(typeof a); // it give number
a = "hello";
console.log(typeof a); // it give string
// in js variable have no type thus anything can be inserted;
//but above something type number and string. and i said varaible have no type in js
// actually typeof show type of data present inside not the type of varaible.

//unary operator

// primitive values
var x = 10; // value 10 are stored in variable x;
// in reference value

var x = { value: 10 };
y = x;
//object {value:10} is not stored in variable x but its address get stored int x
// which get passed to y. now both point to same address
///////////////////////////////

const res=typeof([1,2,5,5,54,35])
console.log(res);
const res2=typeof(null)
console.log(res2);
// see there is no such thing called array. above has type object not array.

//typeof of a NaN will return a Number .

isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true

console.log("........................");
console.log(typeof(NaN)==="number");