 const fs = require("fs");

 console.log("Reading Start");

// // asynchronous way to read file
fs.readFile('input.txt',function(err,data){
    if(err){
        console.log('Error:',err);
         return err;
    }
    console.log('Data',data.toString());
    console.log('READ END');
    return data;
});

console.log('Other Stuff');

// synchronous way to read file

// var data = fs.readFileSync('input.txt');
// console.log('Data:', data.toString());
// console.log('READ END');
// console.log('OTHER STFF');

// Read >Open+Read
// buf = new Buffer(1024);
// fs.open('input.txt','r+',function(err, fd){
//     if (err){
//         console.log('error in the file open: ',err);
//     }
//     console.log("File open sucessfully!");

//     fs.read(fd , buf , 0, buf.length , 0 , function (er , bytes){
//         if(er){
//             console.log('Error in reading file!')
//         }
//         console.log('Data : ', bytes);
//         console.log('Data:',buf.slice(0,bytes).toString())

//         // we must close the file
//         fs.close(fd,function(err){
//             if(err){
//                 console.log('error is  :' , err)
//                 return err;
//             }else{
//                 console.log('file closed successfully')
//             }
//         })

//     })
// })

// fs.writeFile('input.txt','PwrAdarsha Skills',function(err){
//     if (err){
//         console.log("Showing err",err)
//     }else{
//         console.log("Writtem text successfully")
//     }
    
//    })

// append to file
// fs.appendFile('input.txt','Kumar append',function(err){
//     if (err){
//         console.log("Throwing Errr", err)
//     }else{
//         console.log("File Appended Successfully");
//     }
// })
  

// deleting file

fs.unlink('input1.txt',function(err){
    if(err){
        console.log("Errot at deleting file",err)
        return err;
    }else{
        console.log("File Deleted Successfully");
    }
}) 