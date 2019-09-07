const intersection = (a,b) => {
    const s = new Set(b);
    return a.filter(x => s.has(x));
}

console.log(intersection([1,2,3],[4,2,3]));

const isEven = num => {
    return num % 2 == 0;
}

console.log([11, 98, 31, 23, 944].filter(isEven));

const x = {
    val: 2
};

const x1 = x => Object.assign({},x,{val: x.val+1});
const x2 = x => Object.assign({},x,{val: x.val*2});

console.log(x1(x2(x)).val);

const doubleMap = numbers => numbers.map(n => n * 2);

console.log(doubleMap([1,2,3]));


let arr1 =[1,2,4,6];
let arr2 = [2,3,4,5];

const getSimilar = (arr1,arr2)=>{
    return arr1.filter(v => arr2.includes(v));
}

console.log(getSimilar(arr1,arr2));