function concat(a,b,callback){
    setTimeout(()=>{
        var r = a + b;
        callback(r);
    },0)
}

function upper(a, callback){
    setTimeout(()=>{
        var r= a.toUpperCase();
        callback(r);
    },0)
}

function decor(a,callback){
    setTimeout(()=>{
        var r = '*' + a + '*';
        callback(r)
    },0)
}


concat('hello', 'world',r1 =>{
    upper(r1,r2 =>{
        decor(r2,r3=>{
            console.log(r3);
        })
    })
});

function concatP(a,b){
    return new Promise(resolve=>{
        concat(a,b,resolve);
    })
}

function upperP(a){
    return new Promise(resolve=>{
        upper(a,resolve);
    })
}

function decorP(a){
    return new Promise(resolve=>{
        decor(a,resolve);
    })
}


concatP("hello",'world')
    .then(upperP.bind(this))
    .then(decorP.bind(this))
    .then(console.log)