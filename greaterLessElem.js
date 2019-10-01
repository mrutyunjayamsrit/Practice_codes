let arr = [2, 3, 1, 5, 4, 9, 8, 7, 5];
let res = [];
function greaterLessElem(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i+1] > arr[i] && arr[i+1] > arr[i+2]){
            res.push(arr[i+1]);
        }
    }
    console.log(res);
}

//greaterLessElem(arr)
greaterLessElem([1, 2, 3, 2, 1]);