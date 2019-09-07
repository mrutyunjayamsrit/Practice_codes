
const median = arr => {
    let mid = Math.floor(arr.length/2);
    let nums = [...arr].sort((a,b)=> a-b);
    console.log(nums)
    return arr.length % 2 !== 0 ? nums[mid]: (nums[mid-1]+nums[mid+1])/2;
}

console.log(median([5, 6, 50, 1, -5,8]));


const dayOfYear = date => {
    return Math.floor((date- new Date(date.getFullYear(),0,0))/1000/60/60/24)
}

console.log(dayOfYear(new Date()));