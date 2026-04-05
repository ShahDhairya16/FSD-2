// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=
// Welcome+to+LJU#AllTheBest"
// 1) Data must be written as below in file named “exam.txt”. File name must be
// fetched from
// the url given above.
// Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
// #AllTheBest
// 2) Read content from file “exam.txt” and send response to server and display data in
// “/” page
// in same format as above but in H1 tag and in red color.
// 3) If any other page is requested it shows “Page not found” message in plain text

const http = require('http');
const fs = require ('fs');
const url = require('url');
var u = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";
var q = url.parse(u,true);
var filename = q.pathname.split('/')[1];
var q1 = q.query.c1;
var q2 = q.query.c3;
var q3 = q.query.c2;
var hass = q.hash;
http.createServer(function(req,res){
    if(req.url == '/home'){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1 style = color:red>'+q1+'\n'+q2+'\n'+q3+'\n'+hass+'</h1>');
    res.end();
    }
    else{
        res.write('Page Not found');
        res.end();
    }
}).listen(8280,()=>{
    console.log('server is running at http://localhost:8280');
})
process.noDeprecation = true;