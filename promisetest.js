let promiseToCleanRoom = new Promise(function(resolve,reject){
    
    let isClean = false;

    if(isClean){
        resolve('Clean');
    }else{
        reject('Not Clean');
    }
});

promiseToCleanRoom.then(function(fromResolve){
    console.log("Room is ",fromResolve);
}).catch(function(fromReject){
    console.log("Room is ",fromReject)
});

