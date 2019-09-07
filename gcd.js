let gcd = (x,y)=>{
    
    if (y === 0){
        return x;
    } else {
        return gcd(y,x%y)
    }
}
console.log(gcd(5,15));
//3,7,1=2
const getToyPos = (k,t,p)=>{
    if(t > k){
        return p + (t%k)-1
    }else{
        return p+k -1
    }
}

console.log(getToyPos(3,5,1));

const gcdTest = (a,b)=>{
    let div = 2;
    let greatDiv = 1;

    if(a<2 || b < 2){
        return 1;
    }

    while(a>=div && b>=div){
        if(a % div ==0 && b% div ==0){
            greatDiv = div;
        }
        div++;
    }
    return greatDiv;
}

console.log("GCD:",gcdTest(14,21));