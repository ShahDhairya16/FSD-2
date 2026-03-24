// 1) Register multiple event listners for different events ("myEvent1", "myEvent2") removing a specific event listner (removeListner) for myEvent2
// 2) Removing all the listner associated with myEvent1 (removeAllListner). Trigger events and observe which listner executes
var events = require('events');
var ee = new events();
var function1 = (msg) =>{
    console.log('Message from function 1 : ',msg);
}
var function2 = (msg) =>{
    console.log('Message from function 2 : ',msg);
}

ee.on('myEvent1',function1);
ee.on('myEvent1',function1);
ee.on('myEvent2',function2);
ee.on('myEvent2',function2);

ee.removeListener('myEvent2',function2);
ee.removeAllListeners('myEvent1');

ee.emit('myEvent1','Event 1');
ee.emit('myEvent2','Event 2');