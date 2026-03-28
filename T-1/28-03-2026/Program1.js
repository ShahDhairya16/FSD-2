// home and about 
// both contain html add req contains if user addd any other url path then it will show 404 page not found

var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url == '/' || req.url == '/home'){
        res.write('<h1>Welcome to Home Page</h1>');
    }
    else if(req.url == '/about'){
        res.write('<h1>Welcome to About Page</h1>');
    }
    else{
        res.write('<h1>404 Page Not Found</h1>');
    }
    res.end();
}).listen(8280,()=>{
    console.log("server is running at http://localhost:8280");
})
