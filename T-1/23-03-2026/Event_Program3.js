/* Create 2 listners for a common event. Print number of events associated with an emmiter. Remove one Listners and call remaining listners again
Also Print the number of remaining Listners.
*/

var event  = require("events");
var ee = new event();
 var listner1 = function(){
    console.log("Listner 1 is called");
 }
 var listner2 = function(){
    console.log("Listner 2 is called");
 }
 ee.on('conn',listner1);
 ee.on('conn',listner2);

 var count = ee.listenerCount('conn');
 console.log(count);
 ee.emit('conn');
 ee.removeAllListeners('conn',listner1);
 
 var count2 = ee.listenerCount('conn');
 console.log(count2);
 ee.emit('conn');

