// Dynamic URL

var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'contentType':'text/html'});
    res.write(req.url+"<br>");
    res.end('URL fetched successfully');
}).listen(8280,()=>{
    console.log("server is running at http://localhost:8280");
})