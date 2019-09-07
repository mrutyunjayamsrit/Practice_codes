//'use strict';

const user = {
    id:551,
    name:'mk',
    getId(){
        return this.id;
    },
    credential: {
        id:120,
        username:'mk',
        getId(){
            return this.id;
        }
    },
};

const getId = user.credential.getId();
console.log(getId);

function hello(){
    const self = this;
    setTimeout(function(){
        console.log(self.name);
    },100)
};

hello.call({name:'sanjo'});


function Person(name){
    this.name = name;
}
Person.prototype.getName= function (){
    return this.name;
}

const tom = new Person('Baji');
console.log(tom.getName());


//const makeAdd = (x)=>(y)=> x+y;
function makeAdd(x){
    return function(y){
        return x+y;
    }
}

const addTen = makeAdd(10);
console.log("result:",addTen(30));

const r = (()=>{
    const n=1;
    const m=2;
    return n+m;
})();
console.log("ref:",n)