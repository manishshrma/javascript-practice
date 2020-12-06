// task is download a file using url and then resize the file and then upload the file

function  download(url)
{
    return new Promise((resolve,reject)=>{
        if(!url.includes("http"))
        {
             reject( new Error("Url doesn't start with http"));
        }
        else{
            setTimeout(()=>{
                let filename=url.split("/").pop();
                  resolve(filename);
        
            },3000);
        }

    })
}

function resize(filename)
{
    return new Promise((resolve,reject)=>{
        if(!filename.endsWith(".png"))
        {
            reject(new Error("file is not png"));
        }
        else{
            setTimeout(()=>{
                let resizefile=filename.split(".")[0]+"-resizefile";
                console.log("true");

                resolve(resizefile);

            },4000);
        }

    })
}
function upload(resizefile)
{

    return new Promise((resolve,reject)=>{
        console.log("file is uploading...")
    
        setTimeout((resizefile)=>{
            let uploadurl="http//imageurl-"+resizefile;
            resolve(uploadurl);
    
        },5000)
    })
    
}


download('http://cb.lk/logo.png').then((filename)=>{
    console.log("got download file"+filename);

    resize(filename).then((resizefile)=>{
        console.log("got resize file"+resizefile);

       upload(resizefile).then((fileupload)=>{
        console.log("got uplad file"+fileupload);

        })
        
    })
})
// can write above like this too(more simpler)

//  download('http://cb.lk/logo.png')
//  .then(resize)
//  .then(upload).then((uploadurl)=>{
//      console.log("file get uploaded "+uploadurl);
//  }).catch((error)=>{
//      console.log("got error "+error);

//  })
// note : catch can handle all the promises reject .