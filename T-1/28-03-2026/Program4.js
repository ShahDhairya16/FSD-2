// // Home page display Welcome to home page in blue color and font size 32 px.login page shows one html file from your directory 
// Gallery page refelects one image from your directory and if any other page is requested it shows 404 page not found message.

var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url == '/' || req.url =='/home'){
        res.write('<h1 style="color:blue;font-size:32px;">Welcome to Home Page</h1>');
    }
    else if(req.url == '/login'){
        data =fs.readFileSync('index.html');
        res.write(data);
    }
    else if(req.url == '/gallery'){
        res.write('<img src="image.png" width="500px" height="500px">');
    }
    else{
        res.write('<h1>404 Page Not Found</h1>');
    }
    res.end();
}).listen(8280,()=>{
    console.log("server is running at http://localhost:8280");
})