const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

// id users counter
let idCounter = 0;

//registration
const createUser = async (username, password, displayName, profilePic) => {
    // create token for new user
    const token = jwt.sign({ username: username }, 'your-secret-key');
    const user = new User({ username, password, displayName, profilePic, idCounter, token });
    idCounter = idCounter + 1;
    return await user.save();
};

//get user details
const getUserDetails = async (username) => {
    const user = await User.findOne({ username });
    return user;
};

//login
const login = async (username, password) => {
    const user = await User.findOne({ username, password });
    return user;
};

//returns details about a specific user
const postUserDetails = async(username) => {
    const user = await User.findOne({ username });
    return user;
};
module.exports = { createUser, getUserDetails, login, postUserDetails };