// Write a Node.js program using the events module to create an event
// emitter, define three events (start, process, end) that print messages to
// the console, and fire all three events in order.

var events = require('events');
var ee = new events.EventEmmiter();
ee.on('start',()=>{
    console.log("Start event fired");
    ee.emit('process');
})
ee.on('process',()=>{
    console.log("Process event fired");
    ee.emit('end');
})
ee.on('end',()=>{
    console.log("End event fired");
})
ee.emit('start');       