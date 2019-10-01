var lengthOfLongestSubstring = function(s) {
    let subStr = [];
    let maxLen = 0;
    for(let i=0;i<s.length;i++){
        if(subStr.includes(s[i])){
            while(subStr.shift()!=s[i]){}
            console.log(subStr);
        }
        subStr.push(s[i]);
        if(subStr.length > maxLen){
            maxLen = subStr.length;
        }
    }
    return maxLen;
};


let input = "abcaba";

console.log(lengthOfLongestSubstring(input))