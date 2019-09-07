let arr = [0,1,0,2,1,0,1,3,2,1,2,1];

const tryTrap = arr =>{
    let set = new Set(arr);
    let arr2 = [...set];
    let s=0;
    let sum = arr2.reduce((a,b)=> a+b)
    return sum;
}

console.log("Sets",tryTrap(arr))

const trapRain = arr =>{
    if(arr.length ==0) return 0;
    let first = 0;
    let last = arr.length-1;
    let firstMax = 0;
    let lastMax = 0;
    let out = 0;

    while(first < last){
        if(arr[first] > firstMax) firstMax = arr[first];
        if(arr[last] > lastMax) lastMax = arr[last];
        if(firstMax < lastMax){
            out +=Math.max(0,firstMax-arr[first]);
            first++;
        } else{
            out +=Math.max(0,lastMax-arr[last]);
            last--;
        }
    }
    return out;
}

console.log(trapRain(arr))