/*
First the event will trigger
emit is used to trigger the event
on/addListener is used to listen to the event
removeListener is used to remove the listener for the event
removeAllListeners is used to remove all the listeners for the event
how many listeners are there is counted by listenerCount()
*/ 

var events = require('events');
var ee = new events();
// ee.on('start',()=>{
//     console.log("Event is started   ")
// })
// ee.emit('start')

ee.on('start',(start,end) =>{
console.log("starts from ",start,' to ',end)
})

ee.emit('start',1,100)