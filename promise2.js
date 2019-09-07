let cleanRoom = function(){
    return new Promise(function(resolve,reject){
        resolve('Cleaned the Room');
    });
}

let removegarbage = function(message){
    return new Promise(function(resolve,reject){
        resolve(message+' Remove garbage');
    });
}

let winIcecream = function(message){
    return new Promise(function(resolve,reject){
        resolve(message+' Won Icecream');
    });
}

/*cleanRoom().then(function(result){
    return removegarbage(result);
}).then(function(result){
    return winIcecream(result);
}).then(function(result){
    console.log("Work Done "+result);
})*/

Promise.all([cleanRoom(),removegarbage(),winIcecream()]).then(function(){
    console.log('All finished');
})

