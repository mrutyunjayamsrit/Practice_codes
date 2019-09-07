const toTitleCase = str => {
    str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
       .map(x => x.charAt(0).toUpperCase()+ x.slice(1))
       .join(' ');

       return str;
}

console.log(toTitleCase('some_database_field_name'));

function getNames(){
    var names = ['Guru', 'Greg','Warren','Meena','Swapnil'];
    var randNumber = Math.floor(Math.random()*names.length)
    return names[randNumber];
}

console.log("name:",getNames());