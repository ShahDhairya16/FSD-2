// Write the node JS script to copy content of one file to another file
// Data should be fetched from source.txt and inserted to "destination.txt" and read data from destination file at the end.
// Perform all this task asynchronously using fs module.

var fs = require("fs")
// // fs.writeFileSync("source.txt","Hello World");
// fs.copyFile("source.txt","destination.txt",function(err){4
//     if(err){
//         console.log("Error: "+err);
//     }
//     else{
//         console.log("Async Operation completed")
//     }
// })
// fs.readFile("destination.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Error: "+err);
//     }    else{
//         console.log(data);
//     }
// })

fs.writeFile("source.txt","New File",function(err){
    if(err){
        console.log("Error: "+err);
    }
    else{
        fs.readFile("source.txt","utf-8",(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                fs.writeFile("destination.txt",data,function(err){
                    if(err){
                        console.log(err)
                    }
                    else{
                    fs.readFile("destination.txt","utf-8",(err,data)=>{
                        if(err){
                            console.log(err)
                        }
                        else{
                            console.log(data)
                        
                    }
                })
            }
        }
    )}})}})
