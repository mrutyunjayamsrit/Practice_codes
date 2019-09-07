const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
const Promise = require('promise');
const Schema = mongoose.Schema;


let url = "mongodb://localhost/Employee";

MongoClient.connect(url)
    .then(function(db) {
        db.collection('Employee').insertOne({
            name: "Mohan",
            address:"3rd street"
        });
    });
/*mongoose.connect(url, (err, db) => {
    if (err) {
        console.log(err);
    }
    console.log("DB created successfully!");



    const postSchema = new Schema(
        {
            name: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            }
        }
    )
    mongoose.model('Employee', postSchema);

    // var myobj = [
    //     { name: 'John', address: 'Highway 71' },
    //     { name: 'Peter', address: 'Lowstreet 4' },
    //     { name: 'Amy', address: 'Apple st 652' },
    //     { name: 'Hannah', address: 'Mountain 21' },
    //     { name: 'Michael', address: 'Valley 345' },
    //     { name: 'Sandy', address: 'Ocean blvd 2' },
    //     { name: 'Betty', address: 'Green Grass 1' },
    //     { name: 'Richard', address: 'Sky st 331' },
    //     { name: 'Susan', address: 'One way 98' },
    //     { name: 'Vicky', address: 'Yellow Garden 2' },
    //     { name: 'Ben', address: 'Park Lane 38' },
    //     { name: 'William', address: 'Central st 954' },
    //     { name: 'Chuck', address: 'Main Road 989' },
    //     { name: 'Viola', address: 'Sideway 1633' }
    // ];
    //db.collection('Employee').insertMany(myobj);

    // Query details from db using collection().find() method
    var cursor = db.collection('Employee').find({name:'Ben'});
     cursor.forEach(function (doc) {
     if(err)console.log(err);

         console.log(doc);
     }) 

    // Update any data using updateOne() or updateMany()
     db.collection('Employee').updateOne(
         {name:"Peter"},
         {
             $set:{name:"mj"}
         }

     )

    // Delete the data using deleteMany
     //db.collection('Employee').deleteMany({name:"Ben"})

    db.close();
})*/