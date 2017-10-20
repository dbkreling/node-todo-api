// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // findOneAndUpdate(filter, update, options, callback) --> {Promise}
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId("59e8689dadfe2d8e214650e3")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // });

    // Update the name of the first occurrence of Daniel to something else
    // db.collection('Users').findOneAndUpdate({
    //     name: "Daniel"
    // }, {
    //     $set: {
    //         name: "Jim"
    //     }
    // }, {
    //     returnOriginal: false
    // });

    // increment age of id in one
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId("59e7af70f1b95378a28da228")
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    });

    // db.close();
});
