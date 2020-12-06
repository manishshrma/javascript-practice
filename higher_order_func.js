// higher function take at least one argument as a function or return a function as return type.


function add(x,y)
{
return x+y

}

//  let sum=add(2,3);  // here sum have return value of function so sum have value
let sum=add;  // sum is now actually the add function
console.log(sum)
// console.log("-------------------------------------------------------------------------------------")
/////////////////////practice////////////////////////////////////////////////////////////////////////////////

// // function getinfo(gln,ga,name,myage)
// // {
// //    let lastname=gln(name);
// //    let age=ga(gln(name));
// //    console.log(lastname);
// //    console.log(age);

// // }
// // getinfo(getlastname,verifyage,"ask sharma",10);
// ///////////////////////////////////////////////////////////////////////////////////////////////

function createcounter( init, delta)
{
   let val=init;
  let counter={
       incr:function()
       {
          val++;
       },
       dec:function()
       {
          val--;
       },
       show:function()
       {
          console.log(val);
       }

  }

  return counter;

 }
let res=createcounter(50,5);
res.show();
res.incr();
res.incr();
res.show();
//////////////////////////////practice///////////////////////////////////////////////////////////////
