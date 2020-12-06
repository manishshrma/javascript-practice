
//TOPICS
//1. callback hell example
//2. improvement of callback using promise
// 3. chaining promises
// 4. modify callback hell by async await 

function addition(val, addcall) {
  return addcall(5 + val, false);
}
function subtraction(val, subcall) {
  return subcall(5 - val, false);
}
function multiplication(val, mulcall) {
  return mulcall(5 * val, false);
}

// addition(2, function adds(addres, err) {
//   if (!err) {
//     subtraction(addres, function subs(subres, err) {
//       if (!err) {
//         multiplication(subres, function muls(mulres, err) {
//           if (!err) {
//             console.log("my res:  " + mulres);
//           }
//         });
//       }
//     });
//   }
// });
/////////CODE written above is basically a low example of callback hell can be improved by using promises///////////////////////////

function addition(x, y) {
  return new Promise((resolve, reject) => {
    let a = x;
    let b = y;
    const p = function add(a, b) {
      return x + y;
    };

    resolve(p);
  });
}

function subtraction(x, y) {
  return new Promise((resolve, reject) => {
    let a1 = x;
    let b1 = y;
    const q = function sub(a1, b1) {
      return x - y;
    };
    resolve(q);
  });
}

function multiplication(x, y) {
  return new Promise((resolve, reject) => {
    let a2 = x;
    let b2 = y;
    const r = function mul(a2, b2) {
      return x * y;
    };
    resolve(r);
  });
}

// addition(2, 3)
//   .then((addres) => {
//     console.log(addres());
//     const res1 = addres();

//     subtraction(res1, 4).then((subres) => {
//       console.log(subres());
//       const res2 = subres();
//       multiplication(res2, 10).then((finalres) => {
//         console.log(finalres());
//       });
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//////////////////////////////////////////////////////CHAINING PROMISES////////////////////////////////////////////////////
function addition(x, y) {
  return new Promise((resolve, reject) => {
    let a = x;
    let b = y;
    const p = function add(a, b) {
      return x + y;
    };

    resolve(p());
  });
}

function subtraction(x, y) {
  return new Promise((resolve, reject) => {
    let a1 = x;
    let b1 = y;
    const q = function sub(a1, b1) {
      return x - y;
    };
    const res=q();
    if(res>1000){
    resolve(q());
    }
    else{
        reject("err");
    }

  });
}

function multiplication(x, y) {
  return new Promise((resolve, reject) => {
    let a2 = x;
    let b2 = y;
    const r = function mul(a2, b2) {
      return x * y;
    };
    resolve(r());
  });
}

// addition(2, 3)
//   .then((addres) => {
//     console.log(addres);

//     return subtraction(addres, 3);
//   })
//   .then((subres) => {
//     console.log(subres);
//     return multiplication(subres, 10);
//   })
//   .then((finalres) => {
//     console.log(finalres);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
///////////////////////////////////////////////////ASYNC AWAIT/////////////////////////////////////////////////////

// but wait how do you handle error if asyhc await always return resolve function. what abut reject.
// bro use try catch
async function dostuff()
{
    try{
    const addpromise_resolved_res=await addition(2,4);
    console.log(addpromise_resolved_res);
    const subpromise_resolved_res=await subtraction(addpromise_resolved_res,3);
    console.log(subpromise_resolved_res);
    const mulpromise_resolved_res=await multiplication(subpromise_resolved_res,10);
    console.log(mulpromise_resolved_res);
    }
    catch(err)
    {
        console.log("ERRORRRRR!!!");
    }
}

dostuff();