var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        minLenght: 1,
        trim: true,
        required: true
    }
});

module.exports = {User};
