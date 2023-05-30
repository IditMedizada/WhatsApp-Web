const messageService = require('../services/messages.js');
const Messages = require('../models/messages.js');
const jwt = require('jsonwebtoken');
const key = "secret";

//add new message to the db
const addMessage = async (req, res) => {
    // If the request has an authorization header
    if (req.headers.authorization) {
        // Extract the token from that header
        const data = req.headers.authorization.split(" ")[1];
        const parsedData = JSON.parse(data);
        const token = parsedData.token;
        try {
            // Verify the token is valid
            if (validateToken(token)) {
                const data = jwt.verify(token, key);
                //console.log(data);
                const { msg } = req.body;
                userId = req.params.id;
                const message = await messageService.addMessage(msg, token);
                res.status(200).json( {id: message.id, created: message.created, 
                    sender: message.sender, content: message.content} );
            } else {
                res.status(401).json({ error: 'Invalid token' });

            }
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
        const data = req.headers.authorization.split(" ")[1];
        const parsedData = JSON.parse(data);
        const token = parsedData.token;
      
        try {
            // Verify the token is valid
            if (validateToken(token)) {
                const data = jwt.verify(token, key);
                userId = req.params.id;
                const messages = await messageService.getUserMessages(userId);
                res.status(200).json( messages );
            } else {
                res.status(401).json({ error: 'Invalid token' });

            }
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
        const data = req.headers.authorization.split(" ")[1];
        const parsedData = JSON.parse(data);
        const token = parsedData.token;
        // console.log('token');
        // console.log(token);
        try {
            // Verify the token is valid
            if (validateToken(token)) {
                const users = await messageService.getUsers(token);
                res.status(200).json( users );
            } else {
                console.log("error2");
                res.status(401).json({ error: 'Invalid token' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
    else
        return res.status(403).send('Token required');
}

function validateToken(token) {
    try {
        const decoded = jwt.verify(token, key);
        return decoded !== undefined;
    } catch (error) {
        return false;
    }
}

module.exports = { addMessage, getUserMessages, getUsers };