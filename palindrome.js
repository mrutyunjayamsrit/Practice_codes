function isPalindrome(str){
    let len = str.length;

    for(let i=0;i<len/2;i++){
        if(str[i] !== str[len-i-1]){
            return false;
        }
    }
    return true;
}

console.log("isPalindrome:",isPalindrome("toyot"));


const checkPalindrome = str =>{
    return str == str.split('').reverse().join('');
}

console.log("isPalindrome1:",checkPalindrome("toyota"));

function rand5(){
    return 1 + Math.random() *4;
}

function rand7(){
    //return Math.floor(5+rand5()/5 *2);
    return Math.floor(1 + Math.random()*6);
}

console.log(rand7())

function missingNum(arr){
    let N = arr.length +1;
    let total = (N * (N+1))/2;
    console.log(total)
    let arrsum = arr.reduce((a,b)=> a+b)
    console.log(arrsum);
    return total - arrsum;
}

console.log("Missing no:",missingNum([5, 2, 6, 1, 3]))


function sumFinder(arr,sum){
    let len = arr.length;
    for(let i=0;i<len-1;i++){
        for(let j=i+1;j<len;j++){
            if(arr[i]+arr[j] == sum){
                return true;
            }
        }
    }
    return false;
}

console.log(sumFinder([6,4,3,2,1,7], 9));

function sumFinder2(arr,sum){
    let differ = {};
    let len = arr.length;
    let substract;
    for(let i=0;i<len;i++){
        substract = sum - arr[i];
        if(differ[substract]){
            return true;
        }else{
            differ[arr[i]] = true;
        }
    }
    return false;
}

console.log(sumFinder2([6,4,3,2,1,7], 2));


const countZeros = num =>{
    let count = 0;
    while(num > 0){
        count = count + Math.floor(num/10);
        num = num /10;
    }

    return count;
}

console.log("Count of Zeros:",countZeros(20));


function subStringFinder(str,substr){
    let index = str.indexOf(substr);
    console.log(index);
}

subStringFinder('abbcdabbbbbck', 'ab')
subStringFinder('abbcdabbbbbck', 'bck')
subStringFinder('abbcdabbbbbck', 'dk') 