const fs=require('fs');
const readFileLine = filename => fs.readFileSync(filename)
                                   .toString('UTF-8')
                                   .split('\n');

let arr = readFileLine('test1.txt');
//console.log(arr[2])
var out = [];
var str = '';
const getOrcID = (arr) => {
    arr.filter(x => {
        if(x.length >= 32){
            out.push(x.toString().trim())
        }
    });
   return str = '"'+out.join('"||"') + '"'; 
}
console.log(getOrcID(arr));