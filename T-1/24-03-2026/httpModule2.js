var http = require('http');
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    const data = {
        subject: "NodeJS",
        lecture: 4,
    }
    // res.write(data); // This will not work as data is an object, we need to convert it to a string
    res.end(JSON.stringify(data));
}).listen(3120, ()=>{
    console.log("server is running at http://localhost:3120");
})