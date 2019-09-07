
function taxiNumber(num){
    for(let i=0;i< num;i++){
        for(let j=i+1;j<num;j++){
            if(Math.pow(i,3)+Math.pow(j,3) == num){
                console.log("Quebe no:",i,j)
            }
        }
    }
}

taxiNumber(1729);

(function() {
    //'use strict';
    var a = b = 5;
 })();

 console.log(b);