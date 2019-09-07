const fs=require('fs');
const readFileLine = filename => fs.readFileSync(filename)
                                   .toString('UTF-8')
                                   .split('\n');

let arr = readFileLine('test.txt');
//console.log(arr[2])
var out = "";
const getOrcID = (arr) => {
    for(let i=2;i<arr.length;i=i+3){
       // console.log(arr[i]);
        let txt = arr[i].toString().trim();
        out += `"${txt}"` + '||';
    }
    return out;
}
console.log(getOrcID(arr));