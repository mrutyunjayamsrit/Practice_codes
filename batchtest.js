

const batch = (recipe, avilable) => {

    console.log(Object.values(recipe));
    console.log(Math.floor(Math.min(...Object.keys(recipe).map( k => avilable[k]/recipe[k] || 0))));
}


batch({milk: 2, sugar: 40, butter: 20},
    { milk: 5, sugar: 120, butter: 500 })

let x = {a:1,b:2}
console.log(Object.keys(x))

console.log(Object.entries(x))

let arr = [];
for(let i in x){
    arr.push(x[i]);
}
console.log(arr);

const reverseX = (str) => {
    return str.split('').reverse().join('');
    
}
console.log(reverseX("hi"));


const obj = {
    a:1,
    b:2,
    getA(){
        console.log(this.a)
        return this;
    },
    getB(){
        console.log(this.b)
    }
};
obj.getA().getB();



Array.prototype.print = function(){
    
    console.log(this.join(','))
};

[1,2,3,4,5].print();

let arr1 = [1,2,3,4,5,6];
let arr2 = [2,4,6,5,7,8,9,10.15,20]

console.log(arr1.concat(arr2).sort((a,b)=> (a-b)));



