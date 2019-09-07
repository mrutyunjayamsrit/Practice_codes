const inRange = (n, start, end = null) => {
    if (end && start > end) [end, start] = [start, end];
    return end == null ? n >= 0 && n < start : n >= start && n < end;
  };


console.log(inRange(3, 2, 5)); // true
console.log(inRange(3, 4)); // true
console.log(inRange(2, 3, 5)); // false
console.log(inRange(3, 2)); // false

var t = 'foo';
function getT(t){
  console.log("What is T: ",t);
  var t="mojo";
}

getT();