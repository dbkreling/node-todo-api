// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // find one and delete it
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // Delete many with the name 'Daniel'
    // db.collection('Users').deleteMany({name: 'Daniel'});

    // findOneAndDelete with the id of Mike document
    db.collection('Users').findOneAndDelete({
        _id: new ObjectId("59e5d00fcbae064d9e9491b8"),
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    })

    // db.close();
});
