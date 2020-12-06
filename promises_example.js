
///////////TOPICS:///////////////////
//1. promise examples--good examples

var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
};

var showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};
var askMom = function () {
    willIGetNewPhone
    .then(showOff) // chain it here
    .then(function (fulfilled) {
            console.log(fulfilled);
         // output: 'Hey friend, I have a new black Samsung phone.'
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
};

askMom();
///////////////////////////////////PROMISEs/////////////////////////////////////////////////////////////////////////

function cleanroom() {
  return new Promise(function (resolve, reject) {
    function killbill() {
      console.log("kill bill 1");
    }
    resolve(killbill);
  });
}

function removegarbage() {
  return new Promise(function (resolve, reject) {
    resolve(" YES!! removed the garbage too");
  });
}
function gotreward() {
  return new Promise(function (resolve, reject) {
    resolve("yeah YES!! got real cash!!");
  });
}

cleanroom().then((x) => {
  console.log("first promise" + x());
});
