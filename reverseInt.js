let n =-123;
let m =n;
let str = '-'+n;
let n1 = '-' + str.split('').reverse().join('');
console.log(parseInt(n1))
let str1='';
while(m>0){
    str1 = str1+ m%10;
    m =Math.floor(m/10);
}
console.log(parseInt(str1))


var key ,
    obj = {
        name: 'john',
        surname: 'doe'
    };
    Object.prototype.hasOwnProperty = function (key) {
        if(key == 'surname'){
            return false;
        }
        return true;
    };

for ( key in obj ) {
    if ( obj.hasOwnProperty( key ) ) {
       console.log( key + ' exists in obj' );
       console.log( key + ': ' + obj[key] );
       continue;
    }
    console.log( key + " doesn't exist in obj" );
}


