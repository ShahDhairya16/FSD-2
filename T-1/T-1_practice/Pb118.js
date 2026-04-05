// Write a Node.js script that uses the URL module to extract values
// from the following URL:
// https://abc.com/data.txt?m1=Congrats&m2=Node+Test&m3=Best#D
// one
// The program should fetch the file name from the URL, create a file
// with that name, and write the following content into the file using the
// values from the URL:
// Congrats!
// Node Test
// #Done

const url = require('url');
const fs  = require('fs');
const u = "https://abc.com/data.txt?m1=Congrats&m2=Node+Test&m3=Best#Done";
var q = url.parse(u,true);
var filename= q.pathname.split('/')[1];
var m1 = q.query.m1;
var m2 = q.query.m2;
var m3 = q.query.m3;
var hash = q.hash
fs.writeFile(filename,m1+'\n'+m2+'\n'+m3+'\n'+hash,(err)=>{
    if(err){
        console.log(err);
    }
})
process.noDeprecation = true;