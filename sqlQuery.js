//use 'strict';
var mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'pao',
    database:'nodeapp'
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
});

function insertQuery(){
    let insertQuery = 'INSERT INTO employee VALUES("Naven","nav","naveen@247.ai")';
    let query = mysql.format(insertQuery);
    con.query(query,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data.insertId); 
    })
}

function updateQuery(name,email){
    let updateQuery = 'UPDATE employee SET username=? WHERE email= ?';
    let query = mysql.format(updateQuery,[name,email])
    con.query(query,(err,data)=>{
        if(err){
            console.log(err);
            return
        }
        console.log(data.affectedRows);
    })
}

function deleteQuery(name){
    let deleteQuery = 'DELETE from employee WHERE ?? = ?';
    let query = mysql.format(deleteQuery,["username",name]);
    con.query(query,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data.affectedRows);
    })
}

function queryAll(username){
    let selectQuery = 'SELECT * FROM employee';
    let query = mysql.format(selectQuery);
    con.query(query,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    })
}

/*setTimeout(()=>{
    insertQuery();
},3000);
*/

/*setTimeout(()=>{
    updateQuery('Naveen','naveen@247.ai')
},3000);*/

/*setTimeout(()=>{
    deleteQuery("Jay");
},3000);*/


setTimeout(()=>{
    queryAll('Jay');
},5000);