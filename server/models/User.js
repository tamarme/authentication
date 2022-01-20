const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: [true, 'Email is already used.']
    },
    hash: String,
    salt: String
});

module.exports = mongoose.model('User', User);