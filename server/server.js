var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useMongoClient: true });

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: 'Good',
    completed: true,
    completedAt: 123
});

newTodo.save().then((doc) => {
    console.log('Save:', JSON.stringify(doc,undefined,2));
}, e => {
    console.log('Unable to save todo');
});

var otherTodo = new Todo({
    text: 'Good'
});

otherTodo.save().then((doc) => {
    console.log('Save:', JSON.stringify(doc,undefined,2));
}, e => {
    console.log('Unable to save todo');
});

var User = mongoose.model('User',{
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
});

var newUser = new User({
    email: '    ss@gmail.com'
});

newUser.save().then(res => {
    console.log('Save:', JSON.stringify(res, undefined, 2));
}, e => {
    console.log('Unable to save user');
});