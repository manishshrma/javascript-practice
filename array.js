const { METHODS } = require("http");

//TOPICS:
//1. sort,lexicographical, ownsort METHODS,compare,map,filter(deep),splice


// let arr = [2, 3, 7, 4, 72, 5, 23, 45, 66, 34];
// console.log(arr[2]);
//console.log(arr.sort())  //js does lexicographical sort by default
// sort function is higher order function. it can take fun as arguments
// very similar to java. create trie.

function compare(a,b)// vimp
{
 return a-b;

}

// // array is mutable
let arrsort=arr.sort(compare)// compare func got here and it compare a and b. based on res as +,- and zero sort the array element.
console.log(arrsort)
// // //-------------------------------------------------------------------------------------------------
// // console.log("--------------------------------MAP---------------------------------------------------")

// let arr1=[30,12,10,5,15,20]
// let anotherarr=arr1.map(function(item){
//     return 100-item;
// })
/////note: map function not acutally change the array elements. but sort does
//console.log(anotherarr)
//let a2=arr1.filter(function(item)
//{
//    return item%3==0 // if ture get inserted into a2
//})
// console.log(a2)
// // note: js print one line at a time if want to print all the element in the same line
// then convert into string and then print

// for each function
// arr.forEach((x) => {
//   myfun(x);
// });

// function myfun(x) {
//   if (x > 30) console.log(x);
// }
///////////////////////////////addons and revison////////////////////////

//let myarr = [1, 2, 3, 4, 5];
// create ur own sort method
// myarr.sort(fun);
// function fun(a, b) {
//   return a - b; //  1 and 2. give -ve (node 1 add and then node 2 add on the right because is greater than 1)
// }


let ar=[1,3,4,5,6,7];

let y=ar.splice(2,1);  // cut one element from index  of position 2. Actual change in the orignall array

console.log(ar);
//////////understand the filter again/////
var array = [0, 1, null, 2, "", 3, undefined, 3,,,,,, 4,, 4,, 5,, 6,,,,];

//

const myarr=array.filter((x)=>{return x});

// see- i didn't filter anything still it will filter(removed) the elements- null,undefined,"",0,NAN
// reason for that it filter on the basis of true. so all these elements give falsy result. thus removed(filtered)
console.log(myarr);

