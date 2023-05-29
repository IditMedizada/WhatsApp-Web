const messageService = require('../services/messages.js');
const Messages = require('../models/messages.js');
const jwt = require('jsonwebtoken');
const key = "Some super secret key shhhhhhhhhhhhhhhhh!!!!!";

//add new message to the db
const addMessage = async (req, res) => {
    // If the request has an authorization header
    if (req.headers.authorization) {
        // Extract the token from that header
        const token = req.headers.authorization.split(" ")[1];

        try {
            // Verify the token is valid
            const data = jwt.verify(token, key);
            const { msg } = req.body;
            userId = req.params.id;
            const message = messageService.addMessage({ msg, userId });
            res.status(200).json({ message });
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
    else
        return res.status(403).send('Token required');

};

//get user messages
const getUserMessages = async (req, res) => {
    // If the request has an authorization header
    if (req.headers.authorization) {
        // Extract the token from that header
        const token = req.headers.authorization.split(" ")[1];

        try {
            // Verify the token is valid
            const data = jwt.verify(token, key);
            userId = req.params.id;
            const messages = await messageService.getUserMessages({ userId });
            res.status(200).json({ messages });
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
    else
        return res.status(403).send('Token required');
};

const getUsers = async (req, res) => {
    // If the request has an authorization header
    if (req.headers.authorization) {
        // Extract the token from that header
        const token = req.headers.authorization.split(" ")[1];

        try {
            // Verify the token is valid
            const data = jwt.verify(token, key);
           const users = await messageService.getUsers();
            res.status(200).json({users});
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
    else
        return res.status(403).send('Token required');
}
module.exports = { addMessage, getUserMessages, getUsers };