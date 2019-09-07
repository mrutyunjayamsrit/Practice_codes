function talk(){
    console.log(this);
    console.log(this.sound);
}

let animal = {
    talk
}

let cat = {
    sound:"Meow!!"
};

let dog = {
    sound: "Bowwwww!"
}

let prariedog = {
    howl: function(){
        console.log(this.sound.toUpperCase());
    }
}
Object.setPrototypeOf(cat,animal);
cat.talk();

Object.setPrototypeOf(dog,animal);
dog.talk();

Object.setPrototypeOf(prariedog,dog);
prariedog.howl();


var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());