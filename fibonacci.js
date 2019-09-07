const fibonacci = n => {
    return [...Array(n)].reduce((acc,val,i) => acc.concat(i > 1 ? acc[i-1] + acc[i-2]:i),[] )
}

console.log(fibonacci(10))


function fibN(n){
    let fib = [0,1];

    if(n<=2){
        return 1;
    }
    for(let i=2;i<=n;i++){
        fib[i] = fib[i-1]+fib[i-2]
    }

    console.log(fib);
    return fib[n];
}

console.log("Fibonacci of N",fibN(12));

function fibRecursive(m){
    if(m <=1){
        return m;
    }else {
        return fibRecursive(m-1) + fibRecursive(m-2) 
    }
    
}

console.log("fib recursive:",fibRecursive(12))