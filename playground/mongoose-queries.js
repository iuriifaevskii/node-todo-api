const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

//Todo collection
/*

var id = "59ea71d2c1c9dd1eb7253968";
//var id = "59ea71d2c1c9dd1eb7253968"; //not valid id
//var id = "69ea71d2c1c9dd1eb7253968"; //not found id

if(!ObjectID.isValid(id)) {
    console.log('Id not valid');
}

//Todo.find({
//    _id: id
//}).then(todos => {
//    console.log('Todos:', todos);
//});
//
//Todo.findOne({
//    _id: id
//}).then(todo => {
//    console.log('Todo:', todo);
//});

Todo.findById(id).then(todo => {
    if(!todo) {
        return console.log("Id not found!");
    }
    console.log('Todo by id:', todo);
}).catch(e => console.log(e));

*/

var userId = "59ea69f139b0b915e593ec8b";

if(!ObjectID.isValid(userId)) {
    console.log("Id is not valid!");
}

User.findById(userId).then(user => {
    if(!user) {
        return console.log("user id not found!");
    }
    console.log('User by id:', JSON.stringify(user, undefined, 2));
}).catch(e => console.log(e));