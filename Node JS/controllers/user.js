const userService = require('../services/user.js');
const User = require('../models/user.js');
const key = "Some super secret key shhhhhhhhhhhhhhhhh!!!!!";

// registration
const createUser = async (req, res) => {
    try {
        const { username, password, displayName, profilePic } = req.body;
        //username is already registered
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            res.status(409).json({ error: 'User already exists' });
        }
        const user = await userService.createUser({ username, password, displayName, profilePic });
        // Extract the desired fields from the user object
        const { username: userUsername, displayName: userDisplayName, profilePic: userProfilePic } = user;
        res.status(200).json({ username: userUsername, displayName: userDisplayName, profilePic: userProfilePic });

    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
};

//get user details
const getUserDetails = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await userService.getUserDetails({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Extract the desired fields from the user object
        const { username: userUsername, displayName: userDisplayName, profilePic: userProfilePic } = user;
        res.status(200).json({ username: userUsername, displayName: userDisplayName, profilePic: userProfilePic });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

//login
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userService.login({ username, password });
        if (!user) {
            return res.status(404).json({ error: 'Invalid username or password' });
        }
        res.status(200).json({ token: user.token });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

//return delatils about specific user-post request
const postUserDetails = async (req, res) => {
    // If the request has an authorization header
    if (req.headers.authorization) {
        // Extract the token from that header
        const token = req.headers.authorization.split(" ")[1];

        try {
            // Verify the token is valid
            const data = jwt.verify(token, key);
            const { username } = req.body;
            const user = await userService.postUserDetails({ username });
            if (!user) {
                return res.status(404).json({ error: 'Invalid username' });
            }
            res.status(200).json({ id: user.id, user: { username: user.username, displayName: user.displayName, profilePic: user.profilePic } });
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
    else
        return res.status(403).send('Token required');

};
module.exports = { createUser, getUserDetails, login, postUserDetails };