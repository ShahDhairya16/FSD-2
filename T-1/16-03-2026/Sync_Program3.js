// Write the node js script to writs the text "You are creating file" to help.txt file.
// After that append the text "you are appending data"to the same file after taht read the file and print content to the console
// After finishing read operation,  print the line thans for using my program. write append read sequence must be maintained using async method

var fs = require("fs")
fs.writeFile("help.txt","You are creating file",function(err){
    if(err){
        console.log(err)
    }
    else{
        fs.appendFile("help.txt"," You are appending data",function(err){
            if(err){
                console.log(err)
            }
            else{
                fs.readFile("help.txt","utf-8",(err,data)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log(data)
                        console.log("Thanks for using my program")
                    }
                })
            }
    })}})
    