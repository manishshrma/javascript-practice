//TOPICS:

// 1. Higher order func(basic)
// 2. callback examples


///////very basic example of higher order function/////
const x=function one()
{
    console.log("one function get exectued");
}
const y=function two(one)
{
    console.log('two function get executed');
    one();
}

y(x);
/////////////////////////////////////////////END///////////////////////////////



////////////example 2--callback/////////
function addition(val, add) {
  add(val + 2, false);
}
function multiplication(val, mul) {
  mul(val * 3, false);
}

addition(2, function (x, err) {
  if (!err) {
    res = console.log("add res is:" + x);
    multiplication(x, function (y, err) {
      console.log("mul res is:" + y);
    });
  } else {
    console.log("error");
  }
});

//1. you have a function that take some value and magic function .
// function addition(value,magic)
// you want to wokr with it. you wanted to call that function

//addition(myvalue,function(){})
// waht i did that i prepared my function that that have some logic which only work with
// when that function get called with whatever values
// come back to function(){}
//now this function come back with some value
/////////////////////////////////////END///////////////////////////


/////////callback -- good example keep it///////////


function downloadfile(url, name) {
  console.log("file is " + name);
  setTimeout(function () {
    console.log("file downloaded");
    let path = "C://manish/folder";
    name(path);
  }, 3000);
}

function resizefile(url, resize) {
  console.log("complete file function is: " + resize);

  setTimeout(function () {
    let path = "C:/disk_folder_manish";
    resize(path);
  }, 5000);
}
downloadfile("https://www.google.com/images", function (path) {
  console.log("file downloaded at path: " + path);
});
resizefile("https://wwww.google.com/images", function (path) {
  console.log("resize file path is at: " + path);
});

//NOTE: callback need to be asynchronus
