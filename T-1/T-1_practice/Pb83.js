// Write a nodeJS script to fire an event named calculate which
// calculates the total marks of 5 subjects about of 25 marks and
// displays the total marks on console as an output.The calculate event
// fires another event name percentage which takes total marks as
// argument and percentage should get displayed in console.

var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('calculate',()=>{
    var marks = [20,22,18,24,25];
    var total = marks.reduce((a,b)=>a+b,0);
    console.log('Total Marks: '+total);
    eventEmitter.emit('percentage',total);
});
eventEmitter.on('percentage',(total)=>{
    var percentage = (total/125)*100;
    console.log('Percentage: '+percentage);
});
eventEmitter.emit('calculate');
process.noDeprecation = true;