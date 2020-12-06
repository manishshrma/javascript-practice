// here practicing object oriented programming

//////////////////create an object using object////////////////////////////////////
let EmployeeClass = {
  age: 12,
  rank: "high",
  level: "low",

  getAge: function (age) {
    console.log(age);
  },

  getRank: function () {
    console.log(rank);
  },
};

// console.log(EmployeeClass.age);
////////////////////////using function to create an object//////////////////////////////////////
//  it is Also callled factory method
function createcircle(radius) {
  return {
    // radius: radius, // if both the variable are same name, can use single variable which store val
    radius, // like this
    draw: function () {
      console.log("draw");
    },
  };
}
const circle = new createcircle(121);
console.log(circle.radius);
///////////////////using constructor to create obj///////////////////////////////////

function Createcircle(radius) {
  // Note:  first letter is capital in function constructor

  console.log("this", this); // here this referring to the object(that got created from new keyword)
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// const another = new Createcircle(11); // new operator create {} empty obj.
