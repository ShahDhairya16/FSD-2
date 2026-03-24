// Write a Node Js program to stimulate the sequence of events 
// 1) When a "connection" event occurs, print "Connection successful" and trigger a "data_received".
// 2) When a "data_received" event occurs, print "Data received successfully" 
// 3) finally prints thanks at the end of the execution.

var event = require("events");
var ee = new event();

ee.addListener('connection',()=>{
    console.log("Connection successful");
    // setTimeout(()=>{
    //     ee.emit('data_recieved');
    // },2000)   === > this is used to simulate the delay in receiving data after connection is successful
    ee.emit('data_recieved');
});
ee.addListener('data_recieved',()=>{
    console.log("Data received successfully");
})

ee.emit('connection');
console.log("Thanks");

