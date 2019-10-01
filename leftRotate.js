let arr = [1,2,3,4,5];
let n=4;
arr.unshift()
console.log(arr)
let arr1 = [];
for(let i=0;i<arr.length;i++){
    let new_index = (i+n)%arr.length;
    arr1[i] = arr[new_index];
}
console.log(arr1)
