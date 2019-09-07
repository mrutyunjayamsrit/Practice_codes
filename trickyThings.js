const x = [1,2,3];
x[-1] = -1;
console.log(x.indexOf(10000))
console.log(x[x.indexOf(10000)]);

const ary = [1,2,15,30,5,45,7];
console.log(ary.sort((a,b)=> a<b));


let i = Number.MIN_VALUE;
console.log(i * i);
console.log(i + 1);
console.log(i -1);
console.log(i / i);

console.log("Minimum value:",i);


const dup = [1,2,5,1,3,2,8];

const removeDup = (dup) => {
    //return [...new Set(dup)];
    let arr = [];
    for(let i=0;i<dup.length;i++){
        //console.log(arr.indexOf(dup[i]))
        if(arr.indexOf(dup[i]) == -1){
            arr.push(dup[i]);
        } 
    }
    return arr;
}

const removeDup1 = (dup) => {
    let obj = {};
    for(let i of dup){
        obj[i] = true;
    }
    return Object.keys(obj);
}
console.log("After removal:",removeDup(dup));
console.log("After removal obj:",removeDup1(dup));

function getCurrentDayprompt(){
    let date = new Date();
    let day = date.getDay();
    switch(day){
      case 1: return 'InstallQuery_Monday';
        break;
      case 2: return 'InstallQuery_Tuesday';
        break;
      case 3: return 'InstallQuery_Wednesday';
        break;
      case 4: return 'InstallQuery_Thursday';
        break;
      case 5: return 'InstallQuery_Friday';
        break;
      default: return 'InstallQuery_Weekend';
      break;
    }
  }

  console.log("prompt:",getCurrentDayprompt());

  function y(){
      console.log(this.length);
  }

  var xx = {
      length:5,
      methos: function(y){
          arguments[0]();
      }
  }

  xx.methos(y,1);

  let m = 'constructor';
  console.log(m[m](01));