function add(x){
    return function (y){
        return function (z){
            return x+y+z;
        }
    }
}

const add1 = (a) => {
    return (b) => {
        return (c) => {
            return a+b+c;
        }
    }
}

console.log(add(2)(3)(4));
console.log(add1(2)(3)(4));

let a =[1,2,3,4,5,6];
let b = a;
//a = [];
//a= 0;
a.splice(0,a.length);
console.log("a:",a);
console.log("b:",b);