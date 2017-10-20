//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("59e9247fdd1bcf0fa87947a6")
    },{
        $set: {
            completed: true
        }
    },{
        returnOriginal: false 
    }).then(res => console.log(res));

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("59e9bb8bab6d34da3369490d")
    },{
        $set: {
            name: 'Valerchik'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then(res => console.log(res));


    db.close();
});