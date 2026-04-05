// Create HTTP webpage on which Home page display “Welcome to
// Log in page” in blue color and font size must be 32px, Login page
// shows one HTML file from static URL having Form with detail for
// Username, Password, submit and reset button, Gallery page reflect
// one Image “hello.jpg” and any other page shows “Page Not found”.
// Write all necessary files to perform task. (Image already exist in same
// folder)

var http = require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    if(req.url=='/home')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1 style="color:blue;font-size:32px;">Welcome to Log in page</h1><a href="/login">Login</a><br><br> <a href="/gallery">Gallery</a>');
        res.end();
    }
    else if(req.url == '/login'){
        fs.readFile('login.html',(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.writeHead(200,{'content-type':'text/html'});
                res.end(data);
            }

        })
    }
    else if(req.url == '/gallery'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<img src="image.png" alt="Hello Image">');
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.write('Page Not found');
        res.end();
    }
}).listen(8280,()=>{
    console.log('server is running at http://localhost:8280');
})