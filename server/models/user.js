const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash')

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        minlength: 1,
        trim: true,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            value: `{VALUE} is not a valid email`
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
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

// function will be used, because 'function' has access to 'this'
UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    // sintax of sign(object_to_be_signed, 'secret-string').toString()
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    // 'tokens' is a regular array, so use array methods to update it
    user.tokens.push({access, token});

    // refer to Lecture 90 (8:46) in order to understand this return chain
    return user.save().then(() => {
        return token; // 'token' will be passed as the success argument for the next 'then' call (on server.js)
    });
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};
