const mergeArray = (a,b)=>{
    let result = [...a,...b];
    console.log(result);
    let out = result.sort(function(a,b){
        return a>b;
    })
    return out;
}

console.log(mergeArray([2,5,6,9], [1,2,3,29]))

function mergeSortedArray(a,b){
    let i=1,j=1;
    let aelm = a[0];
    let belm = b[0];
    let merged = [];

    while(aelm || belm){
        if((aelm && !belm) || aelm < belm){
            merged.push(aelm)
            aelm = a[i++];
        }else{
            merged.push(belm);
            belm = b[j++];
        }
    }
    return merged;
}

console.log(mergeSortedArray([2,5,6,9], [1,2,3,29]))


function swapNumber(a,b){
    console.log("Before Swap a:",a," b:",b);
    b = b-a;
    a = a+b;
    b = a-b;
    console.log("Before Swap a:",a," b:",b);
}

//swapNumber(8,4);

function swapAgain(a,b){
    console.log("Before Swap a:",a," b:",b);
    b = a^b;
    console.log("b:",b);
    a = a^b;
    b = a^b;
    console.log("Before Swap a:",a," b:",b);
}

swapAgain(5,0);