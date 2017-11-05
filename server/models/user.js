const mongoose = require('mongoose');
const validator = require('validator');
//{
//    email: 'urfaevskii@gmail.com',
//    password: 'myPass123',
//    tokens: [{
//        access: 'auth',
//        token: 'gskdljglkdsjfwepowegfb'
//    }]
//}

var User = mongoose.model('User',{
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true,
        },
        token: {
            type: String,
            required: true,
        }
    }]
});

module.exports = {
    User
}