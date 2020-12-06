// 1=="1" will give true as it typecast and comapre
// 1==="1" it give false as it check type as well as value. it is called strict equality operator

// console.log(1+ "1")==1; //true
//  console.log("11" -1)==1; //false 11 typecasted to num 
//  console.log([]=="");// true
//  console.log([]==0)// true
// // console.log(0=="")//true;
// // //  "" string can be typecasted to 0 and empty array can be typecasted to ""
//  console.log({}+[])
//  // adding + before anything , try to typecast into number
//  //thus +"1" give  1 as a num
//  console.log(+[]);

 console.log("___________________________STRING START_________________________________________________")
//  substring and slice are similar, but slice work for -value.
// substr-- it cut value s.substr(3,5)-- it cut 5 values from index 3
 let str="abcdefcgcd";
 let r1=str.indexOf("a");
 let r2=str.substr("a",4);
 let r3=str.substr(2);
 let res=str.substr(2,3);// it give three values from the index 2 and s.substring is same as java wali!!
 let res2=str.slice(2,4); // similar to substring, but also work for -ve value
let res3=str.slice(-5,-3);
 console.log(r1);
 console.log(r2);
 console.log(str.indexOf("c",3));
 console.log(r3);
 console.log("********")
 console.log(res3)
 let rsp=str.split("c")
 console.log(rsp);//give array as result

//  const str="abcdefffaghi";

// const x= str.substr(2,5); // cut the five elements from index 2 and give it;
// console.log(x);
// const y=str.substring(2,5) // same as in java
// console.log(y);

// console.log(str);
// slice and substring work same, except in -ve value case. -ve indicate operations performed from the back.
// NOTE: like substring there is splice in array.
// while substring doesn't work with -ve

// const res1=str.slice(-5,-4);
// const res2=str.split("a")

// console.log(res2);


console.log("________________________________________ARRAYS START_______________________________________*")
// array may not be homeogeneous as javscrpit have no type  varaible
// let arr=[1,2,3,4,5,6,7]
// console.log(arr);
// arr.join('-') /// act like only for show just like you view element in string. Not changing actually
// console.log(arr.join('*'));

// //splice actually change the value of array while slice just show
// arr.splice(3,2);// from 3 index 2 values is cutoff adn then return arr
// console.log(arr)
// console.log(arr.length)
// arr[5]=100;
// console.log(arr.length);
// arr[12]=999;
// console.log(arr); // array can have empty slot value of those empty slot exist and undefined 

//NOTE: javascript have function scopr of varaible not block scope.
// while var with let can give block scope too.