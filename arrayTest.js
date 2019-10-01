let arr = [17,5,6,4,18];

let i=0;
let res = arr.filter(x =>{
    i = i+1;
     if(x > arr[i]){
         return x;
     }
})

console.log(res)

console.log(new Set(arr))