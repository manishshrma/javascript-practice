// you normally execute line after line. but sometime there is one task that don't use cpu power like downloading file
// then it is independently taking its time. using async programming we can simultaneously do another task.


// example js execute line by line(bcoz of interpreter). so suppose 1,2,3,4 line executed and 5 line taking some time becoz its task
// is dependent on internet(downloading file), due to this lines below it like 6,7,8 are on hold. 
//but note downloading file(which line 5 doing) is independent on cpu processing, becuase its using internet bandwidth.
// so by using asynch programming can utilize the time which is unnecessary going waste.

// below is the classical example of above theory

let a=false;
setTimeout(()=>{
    a=true;
});

while(!a)
{
    console.log(1);
}
// once the code reaches in while interepreter run line by line so it keep  executing it like forever, interpreter never get free,
// so never get the chance to execute a=true through settime out.
