
let str = "aba";
let n =10;
function getCount(str,n){
const count = str => str.split('').filter(s => s == 'a').length;

let d = Math.floor(n/str.length);

let r = n- (str.length * d);
return d * count(str) + count(str.substr(0,r));
}
console.log(getCount(str,n));

function Timer(){
    this.seconds = 0;
    setTimeout(()=>{
        console.log(this.seconds++);
    },0)
    console.log(this.seconds);
}

Timer();