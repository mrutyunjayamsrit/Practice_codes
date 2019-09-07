function reverse(str){
    let revStr =[];
    for(let i=str.length-1;i>=0;i--){
        revStr.push(str[i])
    }
    return revStr.join('');
}

console.log(reverse('you are a nice dude'));


function reverseRec(str){
    if(str === ''){
        return "";
    }else{
        return reverseRec(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseRec('you are a nice dude'));


String.prototype.revString = function(){
    if(!this) return this;

    console.log(this.split('').reverse().join(''));
}
"mrutyunjaya".revString();


function reverseWords(str){
    let rev = [];
    let wordlen = 0;
    for(let i=str.length-1;i>=0;i--){
        if(str[i]==' ' || i ==0){
            rev.push(str.substr(i,wordlen+1))
            wordlen = 0;
        }else{
            wordlen++;
        }
    }
    return rev.join(' ');
}

console.log(reverseWords('you are a nice dude'));

function revSentencewords(str){
    return str.split('').reverse().join('');
}

console.log(revSentencewords('you are a nice dude'));


function firstNonRepeatChar(str){
    let len = str.length;
    let charCount = {};
    let char;

    for(let i=0;i<len;i++){
        char = str[i];
        //console.log("charCount[char]:", charCount[char])
        if(charCount[char]){
            //result.push(char);
            charCount[char]++;

        }else{
            charCount[char]=1;
        }
    }
    console.log("CharCount:",charCount);
    for(var j in charCount){
        if(charCount[j]==1){
            return j;
        }
    }
}

console.log("char:",firstNonRepeatChar('the quick brown fox jumps then quickly blow air'));