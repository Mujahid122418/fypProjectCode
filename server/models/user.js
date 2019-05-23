let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    type: String,
    username: String,
    email: String,
    number: String,
    address: String,
    password: String
});


module.exports = mongoose.model('user', UserSchema);