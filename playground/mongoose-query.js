const ObjectID = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

const id = '59ef02009449ff8c4b17bb08';
const userId = '59e9b90d3a441133ceaeb08c';

// if(!ObjectID.isValid) {
//     console.log('Invalid ObjectID');
// };
//
// // return an array of entries found (if one, an array with 1 object)
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Using find:', todos);
// });
//
// // return a single object with the selected search field
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Using findOne', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Using findById', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
