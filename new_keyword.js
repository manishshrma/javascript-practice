// function fruit(color, taste) {
//   this.color = color;
//   this.taste = taste;
//   return this.color + "   " + this.taste + "";
// }

// let orange = new fruit("orange", "sour");
// let apple = fruit("red", "sweet");
// let mango = { color: "yellow", taste: "very sweet" };

// console.log(orange);
// console.log(apple);
// console.log(mango)
// console.log(fruit("reddish","berry"))

// console.log(this)// this is empty object
// console.log(global==this)
// //learn autoboxing at 22min seems imp!!
//////////////////////////////////////practice//////////////////////////////////////////

// function Myfun() {
//   this.p = 10;
//   return 10;
// }
// let x = Myfun();
// let y = new Myfun();

// console.log(x.p);
// console.log(y.p);
///////////////////////
// // function can act as class

// function Person(name, age) {
//   this.firstname = name.split(" ")[0];

//   this.lastname = name.split(" ")[1];
//   this.age = age;
//   this.isadult = function () {
//     return age > 20;
//   };
// }

// const p = new Person("manish sharma", 23); // acting as aconstructor

// console.log(p.isadult());

// const a = 2;
// console.log(global.a);

var obj={

    mykey:"a",
    fun:this,

}


var x=obj.fun;
console.log(x==global);
