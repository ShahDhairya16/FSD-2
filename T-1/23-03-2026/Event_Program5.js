/*
Create a folder named abc
Create a file named xyz.txt and enter data into it
append data to that file and print message "Data appended successfully"
read data from that file and print it in console
copy the content xyz.txt to pqr.txt.
delete the file xyz.txt and lastly print all operations performed successfully.
Use events and sync Fs module.
*/

var fs = require('fs');
var events = require('events');
var ee = new events();

// fs.mkdirSync('abc');
ee.on('WriteData',(data)=>{
    fs.writeFileSync('abc/xyz.txt',data);
    ee.emit('AppendData','\nThis is Dhairya Shah');
})

ee.on('AppendData',(data)=>{
    fs.appendFileSync('abc/xyz.txt',data); 
    console.log("Data appended successfully");
    ee.emit('ReadData');
})

ee.on('ReadData',()=>{
    var data = fs.readFileSync('abc/xyz.txt','utf-8'); 
    console.log(data);
    ee.emit('CopyData');
})
ee.on('CopyData',()=>{
    fs.copyFileSync('abc/xyz.txt','abc/pqr.txt');
    ee.emit("deleteFile");
})

ee.on('deleteFile',()=>{
    fs.unlinkSync('abc/xyz.txt');
    console.log("All operations performed successfully");
})

ee.emit('WriteData','Hello World');