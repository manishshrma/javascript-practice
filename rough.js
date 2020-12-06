const { json } = require("express");

const a = [12,1,5];
const b = [2, 4, 6];

const joiner = [];
let arr=[];


a.forEach((x)=>{
    joiner.push(x)
})
b.forEach((y)=>{
    joiner.push(y);
})

joiner.sort(compare);
function compare(x,y)
{
    return x-y;
}
console.log(joiner);