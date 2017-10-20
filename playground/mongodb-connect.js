//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
        //console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    })
    /*
    db.collection('Users').insertMany([
        {
            name: 'Valera',
            age: 21,
            location: 'Lviv'
        },
        {
        name: 'Valemtin',
        age: 31,
        location: 'Borvaru'
        }
    ], (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.insertedIds));
    })
    */

    db.close();
});