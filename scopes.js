
//////////Example 1//////////////
// var foo="bar";  

// function bar()
// {
//     var foo="baz"
// }
// function baz()
// {
//     foo="bam"
//     bam="yay"
// }
// baz();
// console.log(bam);  //  give you yay. see  it is defined in the global scope 


 //difference between undefined and undeclared(not defined)
 // undefined is the value assigned by default when the variable is declared.
 // function expression -
 // function declartion- first word in the statement is function. and scope it goes to global
////////////////how compiler see the code//////////////

//var foo;  // foo has been defined in the global scope but it has referencing to the undefined value;

// in function bar . 
// hey lhs (foo)  are you referencing to any value, he say yes!!, it value  is "bar".
// ok now i am assigning immediate value to you ehich is "baz". in the global scope.
///////////////case for  bam variable/////////

// hey lhs ever heard of bam reference he say no only after gone through the local scope(which is baz funcction)
//then complier will go out of local scope and look int the global scope, still not find reference, it define the variabel
//itself in the global scope.

///////////////IIFE(immediately invoked function)

// var foo="foo";

// (function(){
//     var foo="bar"
//     console.log(foo);   // "bar"
//  })

//  console.log(foo);// foo
 // because of IIFE pattern, we didn't pollute the outer scope of foo.
 // otherwise if we call this function (when there is no IIFE, we get foo as "foo", foo change get reflect to global)


 ///// dynamic scoping///////

 function foo()
 {
     console.log(bar);
 }
 function baz()
 {
     var bar="bar"
     foo();
 }
 baz();