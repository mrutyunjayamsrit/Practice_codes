let video1 = new Promise((resolve,reject)=>{
    resolve("Playing video 1");
});

let video2 = new Promise((resolve,reject)=>{
    resolve("Playing video 2");
});

let video3 = new Promise((resolve,reject)=>{
    resolve("Playing video 3");
});

video1.then((message)=>{
    console.log(message)
})

Promise.race([video1,video2,video3]).then((messages)=>{
    console.log(messages);
}).catch((err)=>{
    console.log(err)
});
