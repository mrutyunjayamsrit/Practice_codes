const util = require('util');
const setImmediatePromise = util.promisify(setImmediate);

setImmediatePromise('foobar').then((value) =>{
    console.log("promise called")
});


async function timerExample(){
    console.log('Before I/O callback');
    await setImmediatePromise()
    console.log("After I/O callbacks");
}

timerExample();