
// pass implemented function and call inside the timeout.---- callback
///////////////////////////////callback code//////////////////////////////////
function downloadfile(url,download)
{
    console.log("file is downloading...")
       let newdwnldpath=url+"newpath";

       setTimeout(()=>{
             console.log("file is downloaded to"+newdwnldpath);
             download(newdwnldpath);
       },4000);
}

function resizefile(path,resize)
{
    console.log("file is resizing...")

    setTimeout(()=>{
        let newpath=path+"-resized"+".mypc";

        console.log("file is resized now!! in path "+newpath);

        resize(newpath);

    },3000);

}

function upload(path,uploadfile)
{
    console.log("file is being upload>>>>>>>>");

    setTimeout((path)=>{
        let newpath=path+"-upload_path//";

        console.log("file iss finally uploaded to desired location"+newpath);
        uploadfile(newpath);
    },5000);
}




let url="http://file/pc";
downloadfile(url,(downloadedpath)=>{
    console.log("we got file at path: "+downloadedpath);

    resizefile(downloadedpath,(resizepath)=>{
        console.log("we got resize file path "+resizepath);
           
        upload(resizepath,(uploadpath)=>{
            console.log("we got the uploaded file");
        });
    });
});

/////////////////////////using promises/////////////////////////////////////////////////////////////
// Advantage of promise:

// In callback function, whne you run the function, it take callback as an argument, which later inside the function get called.
// example

function downloadfile(url,download)
{
    console.log("file is downloading...")
       let newdwnldpath=url+"newpath";

       setTimeout(()=>{
             console.log("file is downloaded to"+newdwnldpath);
             download(newdwnldpath);
       },4000);
}

downloadfile((path)=>{
    console.log("we got download file at "+path);  // this get executed immediatelyas soon as downloadfile() get completed.
})
// so here, after completion of downloadfile(), it result must be immediately executed, it doesn't let the facilty to store the
//result, but promise make it possible;

// now let's see promise

function downloadpromise()
{
    return new promise((resolve,reject)=>{
        console.log("file is starting to download");

        setTimeout(()=>{
                console.log("download is complete");
                resolve()//act like callback function calling
        })
    })
}
let downloadfile=downloadpromise();  // promise obj

setTimeout(()=>{                         //
    downloadfile.then(()=>{
        console.log("Aftet download");
    })
},5000)
/////////vvvvimp/////////(17:05 webinar 9 coding block)//////
// as soon as promise get resolved, it look for then function, to execute the resolve, but if there is no .then , then nothing
// happen even though promise has been resolved, according to code, if i add .then(within 5 sec) for resolve to perform , it will
// work.