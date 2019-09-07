const removeDup = arr => {
    let exists = {};
    let result = [];
     let elm;

     for (let i=0;i < arr.length;i++){
         elm = arr[i];
        console.log("elem:",exists[elm]);
         if(!exists[elm]){
             result.push(elm);
             exists[elm] = true;
         }
     }
     return result;
}

console.log(removeDup([1,3,3,3,1,5,6,7,8,1]))