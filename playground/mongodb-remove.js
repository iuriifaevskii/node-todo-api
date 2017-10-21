const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findOneAndRemove({text:"great text"}).then(res => {
//     console.log(res);
// });

Todo.findByIdAndRemove("59eb37cca3881733802a0adb")
.then(res => {
    console.log(res);    
});