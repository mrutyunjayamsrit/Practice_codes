let arr = [10, 20, 30, 40];

function prevGreater(arr){
    let s = [];

    s.push(-1);
    for(let i=1;i<arr.length;i++){
        if(arr[i] < arr[i-1]){
            s.push(arr[i-1])
        }else{
            s.push(-1);
        }
    }
    console.log(s.toString());
}

prevGreater(arr);