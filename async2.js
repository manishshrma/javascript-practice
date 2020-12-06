// function async(callback) {
//   {
//     var name = "karma";
//   }
//   setTimeout(function () {
//     console.log("inside time out fuction:" + name);
//     console.log("callback func");
//     callback(name);
//   }, 3000);
// }
// var count = 1;
// console.log("otuside the function");

// import { func } from "joi";

// async(function (string) {
//   console.log("my name is: " + string);
// });

//////////////////////////////practice//////////////////////////////////////////////////////////
// using callback 1.
function downloadfile(url, downloaded) {
  console.log("file is downloading..." + url);

  setTimeout(() => {
    let filepath = "c://windows/temp";
    console.log("file is downloaded to path:" + filepath);

    downloaded(filepath);
  }, 3000);
}
function resizefile(url, resize) {
  console.log("file is resizing..." + url);

  setTimeout(() => {
    let filepath = url.split(".")[0] + "-resized" + url.split("/")[1];
    console.log("file has resized:" + filepath);
    resize(filepath);
  }, 3000);
}
function uploadfile(url, upload) {
  console.log("file is uploading....");
  setTimeout(() => {
    let diskpath = url.split(".")[0] + "diskpath//E";
    console.log("file has uploaded at disk" + diskpath);
    upload(diskpath);
  }, 3000);
}

downloadfile("https://www.google.com/abc.exe", (downloadpath) => {
  //   console.log("we got the file at our desired path" + path);
  resizefile(downloadpath, (resizepath) => {
    uploadfile(resizepath, (filepath) => {
      console.log("got the file at:" + filepath);
    });
  });
});
///////using promises/////////////////
