const isPrime = num =>{
    let dev = 2;

    while (num > dev){
        if(num % dev == 0){
            return false;
        }else{
            dev++;
        }
    }
    return true;
}

console.log("isPrime",isPrime(2));

// get prime factor for a given number

const getPrimeFactor = n =>{
    let factor = []
    let d = 2;
    while(n >= d){
        if (n % d == 0){
            factor.push(d);
            n = n / d;
        }else{
            d = d + 1;
        }
    }
    return factor;
}

console.log("prime Factor:",getPrimeFactor(69));