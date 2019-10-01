let str = "abcababc";

let result = {};

for( let st of str){
    //console.log(st);
    result[st] = result.hasOwnProperty(st) ? result[st] +1 : 1;
}
console.log(result);

 let repeat = [];

for(let key in result){
    if(result[key] >1){
        repeat.push(key+":"+result[key])
    }
}

console.log(repeat);
