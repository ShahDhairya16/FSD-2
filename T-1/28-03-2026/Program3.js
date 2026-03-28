// <!-- // Write Node js script to fetch values fro url given below and diplay output as asked.
// 1) data Must be return as below in file named exam.txt
// 2) File name fetched from url. Read content of file and send response in "/" page.But in h1 tag and red coler
// 3) If any other page is requested it shows page not found message -->

var http = require('http');
var fs = require('fs');
var url = require('url');
var u = "https://www.google.com/exam.txt?c1=Hello&c2=FSD-2+T1+test&c3=Welcome+to+LJU#AlltheBest";
var q = url.parse(u,true);
var filename = q.pathname.split('/')[1];
var q1 = q.query.c1;
var q2 = q.query.c2;
var q3 = q.query.c3;
fs.writeFileSync(filename,q1+'!\n'+q2+'\n'+q3+'\n');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});

if(req.url == '/'){
    res.write('<h1>'+fs.readFileSync(filename)+'</h1>');
    res.end();
}
else{
    res.write('<h1>404 Page Not Found</h1>');
    res.end();
}
}).listen(8280,()=>{
    console.log("server is running at http://localhost:8280");


})