const findSum = (arr,val)=> {
  var start = 0;
  var end = arr.length - 1;
  while(start < end){
  var sum = arr[start] + arr[end];
  if(sum > val){
    end = end - 1;
  } else if(sum < val){
    start = start + 1;
  } else{
    return true;
  }
  }
  return false;
}

 let result= findSum([1,2,3,4],7);

  console.log(result);