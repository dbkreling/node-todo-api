const ObjectID = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: "59ef02009449ff8c4b17bb07"}).then((todo) => {
//     console.log(todo);
// });
//
// Todo.findByIdAndRemove("59ef02009449ff8c4b17bb08").then((todo) => {
//     console.log(todo);
// });
