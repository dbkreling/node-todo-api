var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Create a model for Documents in Todos
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

var User = mongoose.model('User', {
    email: {
        type: String,
        minLenght: 1,
        trim: true,
        required: true
    }
});

// var newTodo = new Todo({
//     text: '  Something to do  '
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo: ', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

var newUser = new User({
    email: ''
});

newUser.save().then((doc) => {
    console.log('Saved user: ', doc);
}, (e) => {
    console.log('Unable to save user', e);
});
