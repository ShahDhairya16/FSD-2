// Write a Node.js program using the HTTP module to create a server
// that sends a JSON response when the user visits the /api route.
// The JSON object should contain:
// name as "Rahul", course as "NodeJS",status as "Enrolled"
// Set the appropriate header for JSON data and display "404 – Page
// Not Found" for any other route.
var http = require('http');
http.createServer(function(req,res){
    if(req.url == '/api'){
    res.writeHead(200,{'content-type':'application/json'});
    res.write('{"name":"Rahul","course":"NodeJS","status":"Enrolled"}');
    res.end();
    }
    else{
        res.write('404  Page Not Found');
        res.end();
    }
}).listen(8290,()=>{
    console.log('server is running at http://localhost:8290');
})