const EventEmiiter = require('events');
class MyEmmitter extends EventEmiiter{}
const myEmmitter = new MyEmmitter();

myEmmitter.on('horror',()=>{
    console.log("Annable is coming!!!!");
});



myEmmitter.on('event',()=>{
    console.log("Event occurs!!!!");
});

myEmmitter.emit('horror');

myEmmitter.emit('event');