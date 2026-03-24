// Write a Node JS script to print Query String of URL in file FSD.txt using ES6 callback function.
var url = require('url');
var fs = require('fs');
var addr = "https://localhost:8080/default.html?year=2025&month=feb";
var q = url.parse(addr,true);
console.log(q);
q.data = q.query;
fs.writeFile('FSD.txt',q.data.year,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Data written successfully");
    }
})
process.noDeprecation = true;