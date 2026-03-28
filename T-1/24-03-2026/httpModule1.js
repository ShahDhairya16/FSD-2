/*
createServer() function is used to create a server object. The function has two parameters: req (request) and res (response).
200 = page is okay
404 = page not found
writeHead() will set the content type of the response to text/html, which means that the response will be in HTML format.
write() function is used to send a response to the client. In this case, it sends the string "Hello World" as the response.
end() function is used to end the response. And browser will receive the response and display it on the screen.
listen() function is used to specify the port number on which the server will listen for incoming requests. In this case, it listens on port 3120. The second parameter is a callback function that will be executed once the server starts listening. In this case, it logs a message to the console indicating that the server is running and provides the URL where it can be accessed.

text/plain : Plain Text  
text/html : HTML Document
application/json : JSON Data
image/jpeg : JPEG Image
image/png : PNG Image

*/

var http = require('http');
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3120, ()=>{
    console.log("server is running at http://localhost:3120");
})