const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
}

// Let's use a secred '123abc'
var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded:', decoded);

//
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// // Man in the middle code:
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data));
//
// var resulthash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resulthash === token.hash) {
//     console.log('Integrity OK');
// } else {
//     console.log('This code was tainted.');
// }
