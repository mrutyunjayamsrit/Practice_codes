let arr = [2, 1 ,5 ,3 ,4];
let count = 0;
for(let i=0;i<arr.length;i++){
    if((arr[i]-(i+1)) > 2){
        console.log("Too chaotic");
        return;
    }
    
    for(let j = i+1;j<arr.length;j++){
        if(arr[i] > arr[j]){
            count++;
        }
    }
}
console.log(count);

