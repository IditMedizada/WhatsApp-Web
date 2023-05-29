const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },

    displayName: {
        type: String,
        require: true
    },
    profilePic: {
        type: String,
        require: true
    },
    id: {
        type: String,
        require: true
    },
    token: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('User', User);