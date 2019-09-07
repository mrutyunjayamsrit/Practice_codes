

const quicksort = arr => {
  if(arr.length <2){
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for(var i=1, total=arr.length;i<total;i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }


  return [...quicksort(left),pivot,...quicksort(right)];
}
console.log(['q','a','z','w','s','x','e','d','c','r']);
console.log(quicksort(['q','a','z','w','s','x','e','d','c','r']));