// var delay=(seconds)=>{
//     return new Promise((resolve,rejcet)=>{

//         //throw new Error("omg error")

//         if(seconds>5)
//         {
//             rejcet(new Error(`${seconds} seconds is too long!!`))
//         }

//         setTimeout(()=>{
//             resolve("delay has ended");
//         },seconds*1000);
//     })
// }

// var mydelaypromise=delay(6);  // store promise in ab var

// mydelaypromise
// .then((fromcallback)=>{
//     console.log(fromcallback);
// }).then(()=>34)    // returning the number
// .then(num=>console.log(num)) // then take number as args
// .catch((error)=>console.log(error.message))
////////////////////////IMPORTANT CONTENT////////////////////////////////////////////////////////////
// promisfy present in util package. using promisfy we can convert calllback function into promise.

// const { promisify } = require("util");

// var delay = (seconds, callback) => {
//   if (seconds > 3) {
//     callback(new Error(`${seconds} seconds is too long`));
//   } else {
//     setTimeout(() => {
//       callback(null, `delay is finally over`);
//     }, seconds * 1000);
//   }
// };

// delay(5, (error, message) => {
//   if (error) {
//     console.log(error.message);
//   } else {
//     console.log(message);
//   }
// });
////// instead of using callback here below is promise using promisifys
// var promiseDelay=promisify(delay);

// promiseDelay(5).then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err.message);
// })

//////////example 2/////////////

// var fs=require('fs');
// var {promisify}=require("util");

// var writeFile=promisify(fs.writeFile);
// // while file is writing do something else
// console.log("doing some other task meanwhile");
// writeFile('sampletext.txt',"write anything in the file")
// .then(()=>console.log("succesfully written"))
// .catch((err)=>console.log(err.message));
////example - callback hell into promises/////////////////////////


var fs = require('fs');
var beep = () => process.stdout.write("\x07");

const doStuffSequentially = () => {
    console.log('starting');
    setTimeout(() => {
        console.log('waiting');
        setTimeout(() => {
            console.log('waiting some more');
            fs.writeFile('file.txt', 'Sample File...', error => {
                if (error) {
                    console.error(error);
                } else {
                    beep();
                    console.log('file.txt created')
                    setTimeout(() => {
                        beep();
                        fs.unlink('file.txt', error => {
                            if (error) {
                                console.error(error);
                            } else {
                                console.log('file.txt removed');
                                console.log('sequential execution complete');
                            }
                        })
                    }, 3000)
                }
            });
        }, 2000)
    }, 1000)
}

// doStuffSequentially();
/// converting the above callback into promises

var fs=require('fs');
var {promisify}=require("util");
var writeFile=promisify(fs.writeFile);
var unLinkFile=promisify(fs.unlink);
var beep = () => process.stdout.write("\x07");

var delayPromise=(seconds)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("delays..")},seconds*1000);
    })
}

// var doStuffSequentially1=delayPromise();

// doStuffSequentially1
// .then(()=>console.log("starting.."))
// .then(()=>delayPromise(1))
// .then(()=>'waiting')   // it return the waiting string that can be utilised in the next then
// .then((msg)=>console.log(msg))
// .then(()=>delayPromise(2))
// .then(()=>console.log("waiting more"))
// .then(()=>writeFile('sampleFile2.txt',"writing some data again using promise"))
// .then(()=>beep())
// .then(()=>console.log("file text was created"))
// .then(()=>delayPromise(3))
// .then(()=>beep())
// .then(()=>unLinkFile('sampleFile2.txt'))
// .then(()=>console.log("file sampleFile2.txt is removed"))
// .then(()=>console.log("sequential execution is completed"))
// .catch((err)=>console.log(err))

///////////now convert the above code into async await///////////////////

var doStuffSequentially2= async ()=>{
    console.log("starting");
    await delayPromise(1);
    console.log("waiting");
    await delayPromise(2);
    console.log("waiting more");

    try{
    await writeFile('file1.txt',"new data is to going.. using async await")
    beep();
    }
    catch(err){
        console.log(err.message);
    }
    console.log("file was created");
    await delayPromise(3);
    beep();
    try{
    await unLinkFile("file.txt");
    }
    catch(err){
        console.log(err.message);
        
        console.log("file.txt is removed");

    }
    console.log("sequential execution is completed");


}

doStuffSequentially2();

////////////////////

//promises.all([p1,p2,p3]).then(()=>{})
// after all the promise get executed, then then() fun run

//promises.race([p1,p2,p3]).then(()=>{})





