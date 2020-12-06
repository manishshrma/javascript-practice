/////////////TOPICS:////////
//1. basic of object, add property, remove property,
//2. creating obj in Es6 (new style)
//3. various methods for object clone 
//4. object to array conversion methods
////////////////////////////
let obj = {
    a: 2,
    b: true,
    c: "hello",
    d: {
      e: 3,
      f: false,
      g: "manish",
    },
  };
  obj.a;
  // console.log(obj.a+obj.b);
  //---------------------------adding new properties to the object-------------------------------
  obj.another = "sharma";
  // console.log(obj);
  // another way of adding properties(Limited use)
  obj[0] = 12; // '0' act as property name and its value is 12;
  // deleting an object properties
  delete obj.a;
  // console.log(obj);
  // console.log(obj.a);
  // console.log(obj.d);
  /////////////////////////////ES6////////////////////
  // var obj = {
  //   aname: "manish",
  //   isgood: function () {
  //     console.log("hello!!");
  //   },
  //   isbad() {
  //     // in es6 can define func without : using.
  //     console.log("great!!");
  //   },
  // };
  



//////////////////////////////////////////Object cloning///////////////////////////////////////////////////////////////////////


// Every object has constructor property that reference to function which use to create an object

// let x = {};
// internally js engine create it as let x= new x{};


// var obj={
// radius:10,
// size:"very big",
// draw(){
//     console.log("draw circle")
// }
// };
// obj.draw()

// TASK: want this obj to be another var or store into another obj


// one method
// var store={};// create a variable that take something as obj;

// for(let key in obj)
// {
//    store[key]=obj[key];  // think of it as json key value pair get the very first key and use that to get all the properties of object
//    console.log(store[key]);
// }
//  console.log(store.radius)
 // modern way to clone the object is better




//Problem with this cloning:-- if object have nested property, during cloning the object, instead of value get copied, references
// get copied, so if i change anything in clone object, same get reflected in my orignal object which shdn't happen

/// this is the example of typical issue, here a hold the reference of {b:{c:d{11}}}, so when i change clone.a=value,
// same change occur in obj
// const obj = {
//   a: {
//     b: {
//       c: {
//         d: 11,
//       },
//     },
//   },
// };
// const clone=Object.assign({},obj);
// clone.a.b.c.d=22;
// console.log(clone);
// console.log(obj.a.b.c.d);
//Example: in techsith video of mock interview part 1-- i got to know about that issue, then how to resolve?

 ///////////////// 2nd method/////////////////////

// const newobj= Object.assign({},obj)
// console.log(newobj);


// ////////////3rd method//////////////////
//if you do not use Dates, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays,
 //Typed Arrays or other complex types within your object, a very simple one liner to deep clone an object is:
// const clone=JSON.parse(JSON.stringify(obj));

// console.log(clone);

///////////////////////////////concept 2////////////////////////////////////////////////
// let obj={

//     hello:"manish",
//     rank:34,
//     level:"high"
// };
// let wc=[];
// Object.keys(obj) // it does copy all the keys of obj
// Object.keys(obj).forEach((x)=>{
//     console.log(x);
//     wc.push({
//         word:x,
//         count:obj[x]+"aa"
//     })
// })
// console.log(wc);
//////////////////////////object to array///////////////

let obj2={
  a:1,
  b:33,
  c:12
}

const Allkeys=Object.keys(obj2); // get array of object keys
const Allvalues=Object.values(obj2);// get array of object values
const AllPair=Object.entries(obj2); // get arrays of object of key value pair

console.log(Allkeys);
console.log(Allvalues);
console.log(AllPair);
