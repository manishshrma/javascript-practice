class Rect {
  //created a class
  constructor(len, wid, color) {
    // created a constructor

    this.rlenth = len;
    this.rbreath = wid;
    this.color = color;
    console.log(this);
  }
}

// let r = new Rect(); // as soon as this obj get created constructor get called
// let r2 = new Rect(); // constuctor get called again

// let r3 = new Rect(1, 2, "red"); // this Rect object
/////////////////////////INheritence/////////////////////////////////////////////////////
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     console.log("walk");
//   }
// }

// class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   } //-------------> 2
//   teach() {
//     console.log("teach");
//   }
//   degree() {
//     console.log(this.degree);
//   }
// }

// let tx = new Teacher("perosn-teacher", "master"); // create an object of teacher class
// imp: when inherit the person class its constructor also get inherited
// that's why i can call tx.name (accessing the constructor property)
// console.log(tx.name);
// console.log(tx.walk());

// anoter imp: when we create our own custom constructor in child class we alos need to
// call the parent construtor using super method-----> GO TO 2

/// there are 2 classes
// 1. Teacher class
// 2. Person class

// to make code simple  user module

//STEPS:
// 1. make both classes ready for exports into another module
//a- for that -- export class Person{

//}
// do this for another classe

//2 import where u want thenm like below
// import {Teacher} from "./teacher"
//////////////////POLYMORPHISM////////////////////////////////////

class Animal {
  constructor(animalname) {
    this.animalname = animalname;
  }

  makesound() {
    console.log(this.animalname + " make sound of " + "normal");

  }
}
class Dog {
  constructor(dogname) {
    this.dogname = dogname;
  }
  makesound() {
    console.log(this.dogname + " make sound of " + "dog");

    //super.makesound();
  }
}

// let a1 = new Animal("normalAnimals");
// let a2 = new Dog("Dog");

// a1.makesound();
// a2.makesound();

/// concept of Object oreinted programming is same as java
// most imp property of class in js is that class can access the outside property in itself
// same for constructor function

// let x = 12; // 12 can be accessed inside class
// class Obj {
//   x = 122; // how to access this. it is useless to do like this. so far i thik

//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   ismethod() {
//     console.log(this);
//     console.log(this.x); // this inside class
//     console.log(x); // outside class
//   }
//   my = function () {
//     this.console.log("as");
//   };
// }

// let res = new Obj(1, 24);
// console.log(res.ismethod());

////////////////////////////////////////////////////////////////////////////////////////////
let x = 12; // this can be accessed inside the constructor function too.
function Obj() {
  // x = 2;  //  x get changed
  this.y = 3;
  this.ismethod = function () {
    console.log(x);
    // console.log("NO!!" + this.x);
    // console.log("YES!!" + this.y);

    console.log(this);
  };
}

let res = new Obj();
console.log(res.ismethod());
