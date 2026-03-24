// Write a node js script to handle event to write data in file append data in file and then read data from the  file and print it in console.Use events
// and async Fs module.

var fs = require('fs');
var events = require('events');
var ee = new events();
ee.on('WriteData',(data)=>{
    fs.writeFile('data.txt',data,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            ee.emit('AppendData','\nThis is Dhairya Shah');
        }
    })
})

ee.on('AppendData',(data)=>{
    fs.appendFile('data.txt',data,(err)=>{
        if(err){
            console.log(err);   
        }
        else{
            ee.emit('ReadData');
        }
})})

ee.on('ReadData',()=>{
    fs.readFile('data.txt','utf-8',(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(data);
        }
    })
})

ee.emit('WriteData','Hello World');