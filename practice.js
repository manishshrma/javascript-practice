// const abc = [1, 2, 3, 4];
// const [x, y, ...z] = abc; // not an array but value get copied into a square block.
// console.log(x);
// this.x = 2;
x = 23;
// console.log(global.x);
var obj = {
  a: "as",
};

var p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("res called 1");
  }, 2000);
});

var p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("res called 2");
  }, 2000);
});

function chainPromises() {
  return p1.then(function (val) {
    console.log("p1");
    return p2.then(function (val) {
      console.log("p2");
      return val;
    });
  });
}

chainPromises().then(function (val) {
  console.log(val);
});
