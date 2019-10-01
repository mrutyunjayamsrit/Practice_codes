let arr = [5, 2, 3, 4];
let res = [];
console.log(arr);
for(let i=0;i<arr.length-1;i=i+2){
    if(arr[i] > arr[i+1]){
        let tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
    }
}

console.log(arr);