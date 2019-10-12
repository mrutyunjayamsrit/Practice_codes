let arr = [1, 2, 2, 5, 8, 8, 8];

function replceElement(arr){
    let res = (arr);
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==arr[i+1]){
            res[i+1] = res[i]+1;
        }
    }

    console.log(res);
    console.log(arr)
}

replceElement(arr);