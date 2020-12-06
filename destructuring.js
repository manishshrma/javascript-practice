//The destructuring assignment syntax is a JavaScript expression that makes
//it possible to unpack values from arrays, or properties from objects, into distinct variables.
//example 1
// var arr = [12, 23, "manish", "abc"];
// [a, b, ...c] = arr;
// console.log(b);

// console.log(c); // rest whic is c give out all the elements in the array
//example 2
// const [x, y] = arr;
// console.log(y);

//example 3
// let a, b;
// [a, b] = [1, 2];
// console.log(a); // 1
// console.log(b); // 2

//eaxmple 4
// let a, b;

// [a = 5, b = 7] = [1];
// console.log(a); // 1
// console.log(b); // 7

//example 5
// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

// const arr = [1, 2, 3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1,3,2]

//exapmle 6
//You can ignore return values that you're not interested in:

// function f() {
//   return [1, 2, 3];
// }

// const [a, , b] = f();
// console.log(a); // 1
// console.log(b); // 3
///////////object destrcture///////////////

//old trick//
var obej = {
  a: 2,
  b: 3,
  c: "manish",
};
// accessing properties
// const x = obej.a;
// const y = obej.b;
//new tech//

const { a, b, c } = obej; // note put same variable inside the block as in the object
console.log(a);
// //// or////////////
// const { a: x, b: y, c: z } = obej; // here, got the value of a from obej and put in another variable x
// console.log(x);

//example

// const abc = {
//   start: { x: 1, y: 2 },
//   end: { a: 12, b: 24 },
// };
// const { start, end } = abc;
// //getting the value now
// const {
//   start: { x: max, y: dex },
// } = abc; // use ssame variable as in object
// console.log(start);
// console.log(max);

// const profile_update = (profile_data) => {
//   const { name, age, sex } = profile_data;
//};

// if you know that data is to be passed use shortcut like below

// const profile_update = ({ name, age, sex }) => {};

//////////////////////////example////////////////////////////
// var response = {
//   data: {
//     confirmed: "abc confirm",
//     recovered: "abc rec",
//     deaths: "abc dea",
//   },
//   status: {
//     header: "202 ok!!",
//   },
// };

// const {
//   data: { confirmed, recovered, deaths },
// } = response;

// console.log(confirmed);
////////////////////////////////////////////////
// const [we, count, ws] = [0, 2, 3];
// console.log(count);




var obj={
  x:12,
  y:"hello"
}


const {x}=obj
// const a=22;

console.log(x);