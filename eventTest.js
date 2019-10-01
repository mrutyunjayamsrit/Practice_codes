const EventEmiiter = require('events');
class MyEmmitter extends EventEmiiter{}
const myEmmitter = new MyEmmitter();

myEmmitter.on('horror',()=>{
    console.log("Annable is coming!!!!");
});



myEmmitter.on('event',()=>{
    console.log("Event occurs!!!!");
});

myEmmitter.on('newNumber',n =>{
    //console.log(n * 2);
    setImmediate(()=>{
        console.log(n * 2);
    })
});

for(let i=0;i<=5;i++){
    myEmmitter.emit('newNumber',i);
}

myEmmitter.emit('horror');

myEmmitter.emit('event');