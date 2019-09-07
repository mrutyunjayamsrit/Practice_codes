let arr = [1,2,5,7];
let sum =0;
console.log("sum:",(arr.map(a => sum= sum +a)))

console.log(arr.reduce((acc,elem)=>acc+elem))

function add(x,y){
    if(x,y){
        return x+y
    }else{
        return function(z){
            return x+z;
        }
    }
}

console.log(add(1,2))
console.log(add(1)(2))


let arn = [1,2,3,4,6,7,8,9,10];
let N=10;
let sum1 = N * (N+1)/2;
let arnSum = arn.reduce((a,b)=> (a+b));

console.log("Missing:",sum1-arnSum);

const til = {
    penny:12,
    nickel:10,
    dime:2,
    quarter:12,
    dollar:30
};

const value = {
    penny:1,
    nickel:5,
    dime:10,
    quarter:25,
    dollar:100
};

function money(total){
    let cT = total *100;
    let re = cT %value.dollar;
    let dollar=cT-re;
    console.log(dollar/value.dollar);
}

money(20.47);

const reverseX = (str) => {
    return str.split('').reverse().join('');
    
}
console.log(reverseX("i love javaScript"));


const arr1 = [1,2,3,4];
function minMax(arr1){
    let arr2 = [];
    let min = Math.min.apply(null,arr1)
    let max = Math.max.apply(null,arr1)
    console.log(min)

    let Sum = arr1.reduce((acc,elem) => acc +elem);
    let minSum = Sum - max;
    let maxSum = Sum - min;

    console.log("minSum",minSum);
    console.log("minSum",maxSum);
}
minMax(arr1);


let Num = 100;
function findLength(N){
    //console.log("length1:", N/Math.pow(2,16))
    let length=0;
    while(N >= 1){
        N = N/10;
        length +=1;
    }
    console.log("length:",length)
    
}
findLength(Num);

const profile = {
    name:"techsmith",
    getName: function() {
        console.log(this.name)
    }
}

profile.getName();

let arr3 = [1,2,2,3,4,4];
function getCountMax(arr3){
    let maxNum = Math.max.apply(null,arr3);
    let count = 0;
    let maxCount = arr3.filter((n)=> { return (n==maxNum) })
    console.log(maxCount)
}
getCountMax(arr3)


const arr4 = [5,120,15,21];
function checktimeout(){
for(let i=0;i<arr4.length;i++){
    setTimeout(()=>{
        console.log(`Index:${i},element:${arr4[i]}`)
    },arr4[i]);
}
}
checktimeout(arr4)

let time = '00:03PM';
function convertTime(time){
    let time1 = time.split(':');
    let hours = time1[0];
    let minute = time1[1];
    let hour = hours;
    console.log("time:",minute.substring(2,minute.length)); 
    if(minute.substring(2,minute.length) =='PM'){
        if (hours == 12){
            hour = hour;
        }else{
            hour =  parseInt(hours) + 12;
        }
    }

    console.log("Final Time:",hour+':'+minute.substring(0,2));
}

convertTime(time);