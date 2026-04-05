// Write a node.js script using Event handling to perform following
// tasks in sequence:
// a) Create file in it named abc.txt and enter data into it.
// b) Append data to that file abc.txt and print message “Data Appended
// Successfully”.
// c) Read the content of the file abc.txt and print the content on http
// web server.
// d) Do all the operations of File using asynchronous file system
// module. And Lastly print the message “All operations performed
// successfully” on console.

var fs= require('fs');
var http =require('http');
var events= require('events');
var ee = new events.EventEmitter();
ee.on('create',()=>{
    fs.writeFile('abc.txt','This is a sample text file',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File created successfully");
            ee.emit('append','My name is John');
        }
    });
})
ee.on('append',(data)=>{
    fs.appendFile('abc.txt',data,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Data Appended Successfully");
            ee.emit('read');
        }
    })
})
ee.on('read',()=>{
    fs.readFile('abc.txt','utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            http.createServer((req,res)=>{
                res.writeHead(200,{'content-type':'text/html'});
                res.write(data);
                res.end();
            }).listen(8280,()=>{
                console.log('Server is running at http://localhost:8280');
            })
        }
})
})
ee.emit('create');