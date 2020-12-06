
//////////// TOPICS://///////
// 1. objet prototype
// 2. inheritance
// 3. little bit of call and this
// 4. Advacne prototype
// 5. Best examples of prototype--these are good
/////////////////////////////

// to understand prototype- make diagram

// Objects in JavaScript have an internal property known as prototype. It is simply a reference to another object and contains
//  common attributes/properties across all instances of the object. An object’s prototype attribute specifies the object
//   from which it inherits properties.
let p={
    a:10,
    b:20,
    c:"android"
}

// // by the help of prototype we can acheive inheritance

let q=Object.create(p);
q.b=100

// console.log(q);
// let r=Object.create(q);

// console.log(q.a)// reason: q contain prototype of p as p is passed during objext creation
// // here is proof
// console.log(q.__proto===p)
// document.write(p.a + " "+ p.c)


/////////////Advance prototype///////(IMP)////////
// __proto__ is the actual object that is used in the lookup chain to resolve methods, etc.
//  prototype is the object that is used to build __proto__ when you create an object with new:

function Foo(who)
{
  this.me=who;
  console.log(this);
}
// Foo.prototype- it give the __proto__ property of foo object

Foo.prototype.identity=function()  //it's like creating a static function in class, so all class obj can use it
{
  return "I am "+this.me;
}
var a1=new Foo("a1");
var a2=new Foo("a2");
a2.speak=function(){
  alert("hello"+this.identity());
}


console.log(a2.identity());
a1.construtor===Foo// true // note a1 object check for constructor property, not there look for its proto, not there look proto
// of proto.

a1.construtor ===a2.construtor // true
a1.__proto__===Foo.prototype // true
a1.__proto__===a2.__proto__ // true
// a2.__proto__ ===a2.construtor.prototype // true
// a2.constructor --give back the function and . prototype on that give back the objectof Foo(or Foo.prototype)


////////////////EXample 2//////////////////////////////
function Foo()
{
 this.me='great'
}
Foo.prototype.indentity=function(){
    return "I am "+this.me
}

var a1=new Foo("a1");
var a2=new Foo("a2");

a1.indentity=function(){
    console.log("hello  "+Foo.prototype.indentity.call(this));
}
a1.indentity()
//////////////////EXample 3////////////////////////////
function Foo(who)
{
    this.me=who

}
Foo.prototype.identify=function()
{
    return "I am "+this.me
}
//////////
// Foo.prototype.speak=function(){
//     console.log("hello "+this.identify());
// }

//////////
function Bar(who){
    Foo.call(this,who);
}
Bar.prototype=Object.create(Foo.prototype);
Bar.prototype.speak=function(){
    console.log("hello "+this.identify());
}
var b1=new Bar("b1");
var b2=new Bar("b2");

b1.speak(); // hello i am b1
b2.speak(); // hello  i am b2

//////////////////Example 4///////////////////////////////////////////








// ////////////////////////////////////////practice////////////////////////////////////////////////////////////
// let obj1={
//   a:1,b:2,fun:function()
//   {
//     console.log("hello world");
//   }
// }
// let obj2=Object.create(obj1);
// obj2.p="hello p ";
// obj2.q="hello q ";

// let obj3=Object.create(obj2);
// obj3.x=12, obj3.y=11;

// obj3.a=obj3.b

// console.log(obj3);



///////////////////////////practice////////////////////////////////////////////////////////////////

///////////////////call() and this/////////////////////////////////////////

// var obj = {
//   name: "manish",
//   age: 20,
// };
// function greet() {
//   console.log(this.name);
// }
// // invoking greet in the context of user object
// greet();
// greet.call(obj);
