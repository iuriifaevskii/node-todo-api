//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').find({_id: new ObjectID('59e99f58ab6d34da3369383c')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, err => {
    //     console.log('unable to fetch todos', err);
    // });
    
    // db.collection('Todos')
    //     .find({completed: true})
    //     .count()
    //     .then((count) => {
    //         console.log(`Todos count:${count}`);
    //     }, err => {
    //         console.log('unable to fetch todos', err);
    //     });

    db.collection('Users')
    .find({name: 'Vasa'})
    .toArray()
    .then(docs => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => {
        console.log('unable to fetch users', err);
    });

    db.collection('Users')
        .find({name: 'Vasa'})
        .count()
        .then(count => {
            console.log(`Users count:${count}`);
        }, err => {
            console.log('unable to fetch users', err);
        });

    db.close();
});