////////////TOPICS///////////
//1. Let,var,const
//2. fun and its scope
//3. javascript hoisting
/////////////////////////////

// function createcounter(initval, delta) {
//   let val = initval;

//   function counter() {
//     val = val + delta;
//     return val;
//   }
//   return counter;
// }

// let fivecount = createcounter(5, 5);
// console.log(fivecount());
// console.log(fivecount()); // even if 2nd time fivecount() run it start the counter func.
// // so value of val doesn't get reset. VIMP.
// console.log(fivecount());
// console.log(fivecount());

//////////////CLOSURE means-- scope of an outer function is preserved inside an inner fucntion called closure scope

// function createcount(init, val) {}
////////////////var scope///////////////////////

// var x = 10;

// function scope() {
//   var x = 20;
//   x += 1;
//   console.log(x); // get 21
//   if (true) {
//     var x = 30;
//     x += 1;
//     console.log(x); // get 31
//   }
//   console.log(x); // get 31
// }

// // All x are same, except outside the func scope wala x=10;
// scope();

// console.log(x);
///////////////////////////////////
// using var add variables to the window. while let prevent it


////////////////best example/////////////


// for(var i=0;i<5;i++)
// {
//   setTimeout(()=>{
//     console.log(i);

//   },3000);
// }
// output will be 5 5 5 5 5 rahter than  0 1 2 3 4 5

///////////hoisting in the let and var//////////////////

console.log(x); //  here hoisting is done. 
// actually JS engine initialise the x variabel at the top as var x;
// see the code..(how JS see the code)
// var x;
// console.log(x);
//// code end....
var x;   

// but in case of let. hoisitng is use strict mode so not declartion by JS engine



/////////////////////////////////////////////AGAIN////////////////////////////


// function incr(x) {
//   return x + 1;
// }
// incr(3);

// //or
// let result = incr(3);
// let res2 = incr(true);
// console.log(result);
// console.log(res2); // true get typecasted into 1
///////////////////////////////////////////////done////////////
// function fun() {
//   this.a = 2;
//   b = 3;
//   c = "man";
// }
// console.log(fun());
// console.log(new fun());
////////////////////////////Scope///////////////////////////////
var x = 10;
function fun(x, y) {
  x = 20;
  console.log(x);
  if (true) {
    var x = 222; //
    x += 2;
    console.log(x);
  }
  console.log(x); // print 224 (var scope reflect to whole func)
  // reason is: var x which is created is not acutally created it take the value od otuside x.becoz
  // it is impossible to write var x=anyvalue, cause block scope doesn't support var.
  // var is func scope.
}
fun(1, 2);
console.log(x);


//////////////// example of let and vs scope in function/////////////////
// var have function scope
// let  and const have block scope
// function myfun() {
//   let y = 1;
//   var x = 1;
//   {
//     var x = 3;
//     let y = 3;
//     console.log("value of x is:" + x); // funct scope if get change it reflect to whole function
//     console.log("value of y is:" + y); // limit to block scope
//   }
//   console.log(x);
//   console.log(y);
// }
// myfun();