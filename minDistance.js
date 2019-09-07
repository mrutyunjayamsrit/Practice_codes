let word1 = "ab";
let word2 = "a";


const minDistance = (word1,word2) => {
    if(!word1 && !word2) return 0;
    if(!word1 && word2) return word2.length;
    if(word1 && !word2) return word1.length;


}


var minDistance2 = function(word1, word2) {
    
    let a=new Array(word2.length+1).fill(0);
    let b=new Array(word2.length+1).fill(0);
    
    for(let i=0;i<=word2.length;i++){
        a[i]=i;
        b[i]=i;
    }
    //console.log(a)
    for(let i=1;i<=word1.length;i++){
        b[0]=i;
        for(let j=1;j<=word2.length;j++){
            if(word1[i-1] == word2[j-1]){
                b[j] = a[j-1];
            }else{
                b[j]=1 + Math.min(a[j-1],b[j-1],a[j])
            }
        }
        a=[...b];
    }
   console.log(a)
   return b[word2.length];   
};

minDistance(word1,word2);
console.log('answer:',minDistance2(word1,word2));


let dog = {
    sound: 'woof',
    talk: function(){
       
        console.log(this.sound)
    }
}
dog.talk();

let talkFunction = dog.talk.bind(dog);
//let talkFunction = dog.talk;
//let boundFunction= talkFunction.bind(dog);
//boundFunction();
//talkFunction();

function talk1(){
    console.log(this.sound);
}

let bomier = {
    sound:"one simply should not walk into mordor"
}

let boundBormier = talk1.bind(bomier);
boundBormier();