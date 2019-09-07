//var keygen = require('keygen');

//console.log(keygen.url(32));
const fs = require('fs');


console.log('start',process.pid);
process.nextTick(()=>{
    console.log('Next process tick');
})

fs.readFile('test1.txt',function(){
    setTimeout(()=> {
        console.log('after 0 s jayega');
    },0);
    
    setImmediate(()=>{
        console.log("Immdiately jayaga");
    }); 

})





console.log('end:',process.platform);