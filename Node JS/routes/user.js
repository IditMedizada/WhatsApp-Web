const userController = require('../controllers/user.js')
const messagesController = require('../controllers/messages.js');
const express = require('express');
var router = express.Router();

//registration
router.route('/api/Users').post(userController.createUser);

//get user details
router.route('api/Users/{username}').get(userController.getUserDetails);

//login
router.route('api/Tokens').post(userController.login);

//returns details about a specific user
router.route('/api/Chants').post(userController.postUserDetails);

//add new message to the DB
router.route('/api/Chats/{id}/Messages'). post(messagesController.addMessage);

//get user messages
router.route('/api/Chats/{id}/Messages').get(messagesController.getUserMessages);

//get users
router.route('/api/Chats').get(messagesController.getUsers);

module.exports = router;