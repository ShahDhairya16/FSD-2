// Write a Node.js program that uses the events module to do the
// following:
// Fire an event "welcome" that prints "Welcome to Node.js" on the
// console.
// Fire an event "time" that prints the current system time.
// Fire an event "bye" that prints "Goodbye!".

var events = require('events');
var ee = new events.EventEmitter();
ee.on('welcome',()=>{
    console.log("Welcome to Node js");
    ee.emit('time');

})
ee.on('time',()=>{
    console.log("Current time: "+new Date());
    ee.emit('bye');
})
ee.on('bye',()=>{
    console.log("Goodbye!");

})
ee.emit('welcome');