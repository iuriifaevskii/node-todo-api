//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    //delete Many
    //db.collection('Todos').deleteMany({text: 'hi man'})
    //.then((result) => {
    //    console.log(result);
    //})
    db.collection('Users').deleteMany({name: 'Andrew'})
    .then(res => {
        console.log(res);
    });

    //deleteOne
    //db.collection('Todos').deleteOne({text: 'hi man'})
    //.then(res => {
    //    console.log(res);
    //});

    //findOneAndDelete
    //db.collection('Todos').findOneAndDelete({completed: true})
    //.then(res => {
    //    console.log(res);
    //});
    db.collection('Users').findOneAndDelete({_id: new ObjectID("59e92631c880bd1a4830dc2e")})
    .then(res => {
        console.log(JSON.stringify(res, undefined, 2));
        console.log(res.value._id);
    });
    

    db.close();
});