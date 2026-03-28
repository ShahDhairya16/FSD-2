// Write a node js program to load a simple html file from your directory and and print its content as html content in browser.

var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{'contentType':'text/html'});
    data = fs.readFileSync('index.html');
    res.write(data);
    res.end();
}).listen(8280,()=>{
    console.log("server is running at http://localhost:8280");
})